# Manager Application

AI 관련 컨텐츠를 관리하고 발행하는 Next.js 기반의 관리자 시스템입니다.

## 주요 기능

- AI 관련 컨텐츠 관리
  - 크롤링된 원문 데이터 관리
  - AI 생성 컨텐츠 관리
  - 발행된 포스트 관리
- 사용자 인증 및 권한 관리
- Redis 기반의 캐시 시스템
- 실시간 데이터 업데이트
- 에러 처리 및 로깅

## 기술 스택

- Node.js (>=18)
- TypeScript
- Next.js (App Router)
- Prisma (DB ORM)
- Redis (캐싱)
- LangChain (AI 처리)
- React-Toastify (알림)
- Tailwind CSS (스타일링)

## 시작하기

### 환경 설정

1. 필요한 환경 변수를 설정합니다:


env
## AI
GEMINI_API_KEY="your_gemini_api_key"
GEMINI_API_KEY2="your_gemini_api_key2"
LANGCHAIN_TRACING_V2=true
LANGCHAIN_ENDPOINT="https://api.smith.langchain.com"
LANGCHAIN_API_KEY="langchain_api_key"
LANGCHAIN_PROJECT="langchain_project"

## DB
MANAGER_DATABASE_URL="your_database_url"
MANAGER_DIRECT_URL="your_direct_url"

USER_DATABASE_URL="your_user_database_url"
USER_PULSE_API_KEY="your_user_pulse_api_key"

## auth
## cognito
COGNITO_REGION="your_cognito_region"
COGNITO_USER_POOL_ID="your_cognito_user_pool_id"
COGNITO_CLIENT_ID="your_cognito_client_id"
COGNITO_CLIENT_SECRET="your_cognito_client_secret"

BATCH_KEY="your_batch_key"

REDIS_URL="localhost"


### 설치 및 실행

## 설치 및 실행

### 스크립트

아래는 패키지에서 제공하는 주요 명령어와 사용 방법입니다:

### 개발 서버 실행
npm run dev

markdown
코드 복사
- 개발 모드에서 Next.js 서버를 실행합니다.
- `Turbopack`이 활성화되며, 기본적으로 `http://localhost:3332`에서 실행됩니다.

### 디버깅 모드 실행
npm run debug

markdown
코드 복사
- `NODE_OPTIONS='--inspect'`를 설정하여 디버깅 모드에서 Next.js 개발 서버를 실행합니다.

### 빌드
npm run build
- 애플리케이션을 프로덕션 환경으로 빌드합니다.

### 프로덕션 서버 시작
npm run start
- 빌드된 애플리케이션을 프로덕션 모드에서 실행합니다.
- 기본적으로 `http://localhost:3332`에서 실행됩니다.

### 코드 린트
npm run lint
- 프로젝트의 코드를 린트하여 스타일 및 코드 품질을 점검합니다.

### 테스트 실행
npm run test
- Jest를 사용하여 테스트를 실행합니다.

### 빌드 캐시 제거
npm run remove-build
- `.next` 디렉토리를 삭제하여 빌드 캐시를 제거합니다.
    
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

## 주요 페이지

- `/new` - 새로운 크롤링 데이터 관리
- `/selected` - 선택된 데이터 관리
- `/ai` - AI 생성 컨텐츠 관리
- `/post` - 발행된 포스트 관리
- `/settings` - 시스템 설정(*개발중)
- `/login` - 로그인 페이지
- `/signup` - 회원가입(*관리자만 사용 가능)

## 캐싱 전략

Redis를 사용하여 다음 데이터를 캐시합니다:
- 사용자 세션

