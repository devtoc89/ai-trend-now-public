import "server-only";
import {
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import { HMAC } from "fast-sha256";
import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import { serviceWrapper } from "#lib/helper/service/service.helper";

interface JwkKey extends jwkToPem.RSA {
  use: string; // Key usage (e.g., "sig")
  alg: string; // Algorithm used (e.g., "RS256")
  kid: string; // Key ID
}
// &
// {
//   e: string; // Exponent (e.g., "AQAB")
//   n: string; // Modulus
//   kty: string; // Key type (e.g., "RSA")
// }

type JsonWebKeySet = {
  keys: JwkKey[];
};

const errorMessageTemplate = (key: string) => `Can\'t not initialize auth module cause of empty value of "${key}".`;

const requiredEnvKeys = [
  "COGNITO_REGION",
  "COGNITO_USER_POOL_ID",
  "COGNITO_CLIENT_ID",
  "COGNITO_CLIENT_SECRET",
] as const;

const envs = requiredEnvKeys.reduce(
  (prev, key) => {
    if (!process.env[key]) throw Error(errorMessageTemplate(key));
    prev[key] = process.env[key];
    return prev;
  },
  {} as { [key in (typeof requiredEnvKeys)[number]]: string },
);

const JWTS_URL = `https://cognito-idp.${envs.COGNITO_REGION}.amazonaws.com/${envs.COGNITO_USER_POOL_ID}/.well-known/jwks.json`;

const cognitoClient = new CognitoIdentityProviderClient({ region: envs.COGNITO_REGION });

const ClientId = envs.COGNITO_CLIENT_ID;
const clientSecret = envs.COGNITO_CLIENT_SECRET;

async function getCognitoKeys() {
  const response = await fetch(JWTS_URL);
  const { keys } = (await response.json()) as JsonWebKeySet;
  return keys;
}

function computeHmacSha256(clientId: string, clientSecret: string, username: string) {
  const encoder = new TextEncoder();
  const hmac = new HMAC(encoder.encode(clientSecret));
  hmac.update(encoder.encode(username + clientId));
  return Buffer.from(hmac.digest()).toString("base64");
}

export async function signup(Username: string, Password: string) {
  const command = new SignUpCommand({
    ClientId,
    Username,
    Password,
    SecretHash: computeHmacSha256(ClientId, clientSecret, Username),
  });

  return await cognitoClient.send(command);
}

export async function confirmSignup(Username: string, ConfirmationCode: string) {
  const command = new ConfirmSignUpCommand({
    ClientId,
    ConfirmationCode,
    Username,
    SecretHash: computeHmacSha256(ClientId, clientSecret, Username),
  });
  return await cognitoClient.send(command);
}

export async function signin(Username: string, Password: string) {
  const command = new InitiateAuthCommand({
    ClientId,
    AuthFlow: "USER_PASSWORD_AUTH",
    AuthParameters: {
      USERNAME: Username,
      PASSWORD: Password,
      SECRET_HASH: computeHmacSha256(ClientId, clientSecret, Username),
    },
  });
  return await cognitoClient.send(command);
}

export async function refresh(RefreshToken: string) {
  const rawJwtTokenRes = await verifyToken(RefreshToken);
  if (!rawJwtTokenRes.success) {
    throw new Error("token is invalid.");
  }
  const payload = getJwtPayload(rawJwtTokenRes.data);
  if (!payload.sub) {
    throw new Error("token is invalid.");
  }
  const command = new InitiateAuthCommand({
    ClientId,
    AuthFlow: "REFRESH_TOKEN_AUTH",
    AuthParameters: {
      REFRESH_TOKEN: RefreshToken,
      SECRET_HASH: computeHmacSha256(ClientId, clientSecret, payload.sub),
    },
  });

  return await cognitoClient.send(command);
}

function getJwtPayload(payload: jwt.JwtPayload | string) {
  if (typeof payload === "string") {
    return JSON.parse(payload) as jwt.JwtPayload;
  }
  return payload;
}

export async function verifyToken(token: string) {
  return await serviceWrapper(verifyToken.name, async () => {
    const keys = await getCognitoKeys();
    const decoded = jwt.decode(token, { complete: true });

    if (!decoded) throw new Error("Invalid token");

    const key = keys.find((k) => k.kid === decoded.header.kid);
    if (!key) throw new Error("Invalid key");

    const pem = jwkToPem(key);
    return jwt.verify(token, pem);
  });
}
