# @repo/typescript-config

모노레포에서 사용되는 공통 TypeScript 설정 패키지로, 다양한 프로젝트 타입에 맞는 기본 설정을 제공합니다.

## 개요

이 패키지는 모노레포 내 다른 패키지와 애플리케이션에서 확장하여 사용할 수 있는 재사용 가능한 TypeScript 설정을 포함합니다. 다음과 같은 프로젝트 타입에 대한 전문화된 설정을 제공합니다:

- Next.js 애플리케이션
- 라이브러리 패키지
- 기본 설정

## 설정 내용

### Next.js 앱 설정 (`nextjs.app.json`)
Next.js 애플리케이션을 위한 확장 설정:
- ESNext 타겟 및 모듈 설정
- 엄격한 타입 체크
- DOM 타입 정의
- Next.js 플러그인 지원
- JSX 보존
- 개발자 친화적인 추가 설정

### 패키지 설정 (`nodeserver.json`)
라이브러리 패키지를 위한 기본 설정:
- NodeNext 모듈 해상도
- ES2023 타겟
- 엄격한 타입 체크
- Declaration map 생성
- 점진적 빌드 지원

