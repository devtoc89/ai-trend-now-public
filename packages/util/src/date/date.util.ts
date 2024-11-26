import dayjs from "dayjs";

export function getCurrentTimeISOString(): string {
  return new Date().toISOString();
}

export function getElapsedTime(startTime: Date): number {
  return new Date().getTime() - startTime.getTime();
}

export function dateFormat({
  value,
  format = "YYYY-MM-DD",
  defaultValue = "",
}: {
  value?: Date | string | null;
  format?: string;
  defaultValue?: string;
}): string {
  try {
    if (!value) return defaultValue;
    return datejsFormat({ value: dayjs(value), format, defaultValue });
  } catch (_) {
    return defaultValue;
  }
}

export function datejsFormat({
  value,
  format = "YYYY-MM-DD",
}: {
  value: dayjs.Dayjs;
  format?: string;
  defaultValue?: string;
}): string {
  return dayjs(value).format(format);
}
