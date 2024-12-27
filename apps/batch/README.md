# Batch Application

배치 작업을 실행하고 관리하는 Node.js 기반의 애플리케이션입니다.

## 주요 기능

- 크롤링 데이터 수집 배치 작업 (Arxiv)
- AI 포스트 생성 배치 작업
- cron 기반의 스케줄링
- 작업 실행 로깅

## 기술 스택

- Node.js (>=18)
- TypeScript
- node-cron (스케줄링)
- pino (로깅)
- dayjs (날짜 처리)

## 시작하기

### 환경 설정

1. 필요한 환경 변수를 설정합니다:

BATCH_KEY=your_batch_key
MANAGER_SERVER_URL="url"
CRAWLER_SERVER_URL="url"


## 스크립트

- `dev`: 개발 모드로 실행 (ts-node-dev)
- `build`: TypeScript 컴파일
- `start`: 프로덕션 모드로 실행
- `test`: Jest 테스트 실행
- `remove-build`: 빌드 결과물 제거

## 배치 작업 설명

### Arxiv 크롤링 (arxivCrawlJob)

- 실행 주기: 15분마다 실행
- 기능: Arxiv 논문 데이터를 수집하여 저장
- 참고 코드: `src/jobs/arxivCrawlJob.ts`

### AI 포스트 생성 (arxivAiPostJob)

- 실행 주기: 1분 마다 실행
- 기능: 수집된 데이터를 기반으로 AI 포스트 생성
- 참고 코드: `src/jobs/arxivAiPostJob.ts`

## 프로젝트 구조
src/
├── helper/ # 유틸리티 헬퍼 함수
├── jobs/ # 배치 작업 정의
└── index.ts # 애플리케이션 진입점