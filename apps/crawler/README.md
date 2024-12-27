# Crawler Application

AI 관련 뉴스와 논문을 수집하는 Fastify 기반의 크롤링 서버입니다.

## 주요 기능

- 다양한 소스에서 AI 관련 컨텐츠 크롤링
  - Arxiv (AI 관련 논문)
  - TechCrunch (AI 뉴스)
  - AI News (artificialintelligence-news.com)
- REST API 엔드포인트 제공
- Swagger UI를 통한 API 문서화
- 크롤링 결과 PostgreSQL DB 저장
- 에러 처리 및 로깅

## 기술 스택

- Node.js (>=18)
- TypeScript
- Fastify
- Prisma (DB ORM)
- Cheerio (HTML 파싱)
- Zyte API (웹 스크래핑)
- Pino (로깅)

## 시작하기

### 환경 설정

1. 필요한 환경 변수를 설정합니다:

env
ZYTE_API_KEY=your_api_key
MANAGER_DATABASE_URL=your_database_url
MANAGER_DIRECT_URL=your_direct_url

### 설치 및 실행

# 의존성 설치
pnpm install
# 개발 모드 실행
pnpm dev
# 프로덕션 빌드
pnpm build
# 프로덕션 실행
pnpm start
# 테스트 실행
pnpm test

## API 엔드포인트

### POST /crawl
크롤링 작업을 실행합니다.

요청 본문:
json
{
"from": "20240301000000", // 시작 날짜/시간 (선택)
"to": "20240302000000", // 종료 날짜/시간 (선택)
"source": "all" // 크롤링 소스 (all, arxiv, techcrunch, ainews)
}


## 프로젝트 구조
src/
├── app/ # 애플리케이션 초기화 및 서버 설정
├── layer/ # 도메인 로직 및 서비스
│ └── domain/
│ └── crawl/ # 크롤링 관련 로직
├── lib/ # 유틸리티 및 헬퍼 함수
├── routes/ # API 라우트 정의
└── tests/ # 테스트 파일