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

export function timeAgoFromStr(date: string): string {
  return timeAgo(new Date(date));
}

export function timeAgo(date: Date): string {
  if (!date) return "";
  const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 60 * 60 * 24 * 365,
    month: 60 * 60 * 24 * 30,
    week: 60 * 60 * 24 * 7,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsPerUnit] of Object.entries(intervals)) {
    if (seconds >= secondsPerUnit || unit === "second") {
      const value = Math.floor(seconds / secondsPerUnit);
      return rtf.format(-value, unit as Intl.RelativeTimeFormatUnit);
    }
  }

  return "";
}
