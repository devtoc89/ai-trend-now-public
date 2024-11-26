export function getCurrentTimeISOString(): string {
  return new Date().toISOString();
}

export function getElapsedTime(startTime: Date): number {
  return new Date().getTime() - startTime.getTime();
}
