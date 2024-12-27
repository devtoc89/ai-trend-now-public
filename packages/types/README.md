# @repo/types

모노레포에서 사용되는 공통 타입 정의 패키지입니다.

## 개요

이 패키지는 모노레포 내 다른 패키지와 애플리케이션에서 공유되는 TypeScript 타입 정의를 포함합니다. 주요 기능은 다음과 같습니다:

- DTO(Data Transfer Object) 타입 정의
- 열거형(Enum) 정의 
- 모델 인터페이스 정의

## 설치

프로젝트는 pnpm workspace를 사용하므로 아래와 같이 의존성을 추가할 수 있습니다:

```
pnpm add @repo/types
```

## 주요 타입 정의

### DTO
- Crawl 관련 DTO
  - Arxiv 크롤링 결과 타입
  - TechCrunch 크롤링 결과 타입
  - AI News 크롤링 결과 타입

### Enums
- PostCategoryEnum: 게시물 카테고리 정의
  - ALL
  - PAPER  
  - NEWS
  - COLUMN

- CrawlStatusEnum: 크롤링 상태 정의
  - CREATED
  - IN_PROGRESS
  - COMPLETED 
  - FAILED

### Models
- AI 관련 모델
  - AiContent: AI 생성 컨텐츠 타입
  - AiContentReference: 참조 정보 타입
  - AiContentMeta: 메타데이터 타입
  - AiContentExt: 확장된 AI 컨텐츠 타입

## 프로젝트 구조
src/
├── dto/ # Data Transfer Objects
│ └── crawl/ # 크롤링 관련 DTO
├── enums/ # 열거형 정의
└── model/ # 모델 인터페이스