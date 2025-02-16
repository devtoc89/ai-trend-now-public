// import { logger } from "@repo/util/logger/pino.instance";

// 통합 에러 핸들러 예시
export function handleServiceError(error: Error, context: string) {
  console.error(`[${context}] Error: ${error.message}`);
  console.error(error.stack);
  // TODO: 로깅, 알림 또는 재시도 로직 추가
}
