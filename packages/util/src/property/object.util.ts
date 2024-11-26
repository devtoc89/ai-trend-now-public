export function isKeyOf<T>(key: string | number | symbol, obj: T extends object ? T : object): key is keyof T {
  return key in obj;
}
