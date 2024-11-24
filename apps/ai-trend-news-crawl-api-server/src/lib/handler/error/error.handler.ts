import { logger } from "#lib/instance/logger/pino.instance.ts";

// 통합 에러 핸들러 예시
export function handleServiceError(error: Error, context: string) {
  logger.error(`[${context}] Error:`, error.message);
  // TODO: 로깅, 알림 또는 재시도 로직 추가
}
