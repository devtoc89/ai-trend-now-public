export function isKeyOf<T>(key: string | number | symbol, obj: T extends object ? T : never): key is keyof T {
  return key in obj;
}

export type GetDotProp<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? GetDotProp<T[Key], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

export function getDotProp<T, P extends string>(obj: T, path: P): GetDotProp<T, P> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return path.split(".").reduce((acc: any, key) => acc?.[key], obj) as GetDotProp<T, P>;
}
