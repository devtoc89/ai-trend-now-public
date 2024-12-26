import argon2 from "argon2";

export async function hashPassword(password: string): Promise<string> {
  return await argon2.hash(password, {
    type: argon2.argon2id, // 권장 모드
    memoryCost: 65536, // 메모리 비용 (64MB)
    timeCost: 3, // 반복 횟수
    parallelism: 1, // 병렬 처리 수
  });
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
  return await argon2.verify(hash, password);
}
