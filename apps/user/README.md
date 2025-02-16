# User Application

AI 관련 뉴스와 논문을 제공하는 Next.js 기반의 사용자 웹 애플리케이션입니다.

## 주요 기능

- AI 관련 컨텐츠 제공
  - AI 논문 요약 및 해설
  - AI 뉴스 및 트렌드
  - AI 컬럼
- 반응형 웹 디자인
- 다크모드 지원
- 마크다운 기반 컨텐츠 렌더링
- SEO 최적화

## 기술 스택

- Node.js (>=18)
- TypeScript
- Next.js (App Router)
- Prisma (DB ORM)
- Tailwind CSS
- Jest (테스팅)

## 시작하기

### 환경 설정

1. 필요한 환경 변수를 설정합니다:

env
USER_DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
USER_PULSE_API_KEY="your_user_pulse_api_key"

### 설치 및 실행
## 스크립트

- `dev`: Turbopack을 사용한 개발 서버 실행 (포트: 3331)
- `debug`: 디버그 모드로 개발 서버 실행
- `build`: 프로덕션용 빌드
- `start`: 프로덕션 서버 실행 (포트: 3331)
- `lint`: 코드 린팅
- `test`: Jest 테스트 실행
- `remove-build`: 빌드 캐시 제거

## 배포

Cloudflare Pages를 통해 배포됩니다:
- `pages:build`: Cloudflare Pages 빌드
- `preview`: 로컬에서 Cloudflare Pages 프리뷰
- `deploy-cloud`: Cloudflare Pages 배포

## 주요 페이지
- `/` - 메인 페이지
- `/post/paper` - AI 논문 목록
- `/post/paper/[id]` - AI 논문 상세
- `/post/column` - AI 컬럼 목록
- `/post/column/[id]` - AI 컬럼 상세

## 프로젝트 구조
src/
├── app/ # Next.js 앱 라우터
│ ├── (private)/ # 인증이 필요한 라우트
│ └── (public)/ # 공개 라우트
├── layer/ # 도메인 로직 및 UI 컴포넌트
│ ├── action/ # 서버 액션
│ ├── domain/ # 도메인 로직
│ └── ui/ # UI 컴포넌트
├── lib/ # 유틸리티 및 설정
│ ├── handler/ # 에러 핸들러
│ └── instance/ # Redis 등 인스턴스
└── types/ # 타입 정의


