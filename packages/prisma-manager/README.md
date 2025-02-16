# @repo/prisma-manager

Prisma를 사용하여 관리자 시스템의 데이터베이스 스키마와 클라이언트를 제공하는 패키지입니다.

## 설치

프로젝트는 pnpm workspace를 사용하므로 아래와 같이 의존성을 추가할 수 있습니다:

```
pnpm -filter @repo/prisma-manager generate
```

## 스크립트

- `push`: 스키마를 데이터베이스에 반영
- `pull`: 데이터베이스 스키마를 가져오기 
- `generate`: Prisma 클라이언트 생성
- `studio`: Prisma Studio 실행
- `prebuild`: 빌드 전 Prisma 클라이언트 생성
- `remove-build`: 빌드 결과물 제거

## 환경 설정

데이터베이스 연결을 위해 다음 환경변수가 필요합니다:


MANAGER_DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
MANAGER_DIRECT_URL="postgresql://username:password@localhost:5432/dbname"