# @repo/util

모노레포 애플리케이션에서 공통으로 사용할 수 있는 유틸리티 패키지입니다.

## 설치

프로젝트는 pnpm workspace를 사용하므로 아래와 같이 의존성을 추가할 수 있습니다:

```bash
pnpm add @repo/util
```


## 주요 기능

### 날짜 유틸리티
- Day.js를 활용한 날짜 포맷팅 및 파싱
- 상대적 시간 포맷팅
- ISO 문자열 변환
- 경과 시간 계산

### 컬렉션 유틸리티
- 배열 비교 헬퍼
- 컬렉션 간 누락 항목 탐지
- 문자열 배열 비교 유틸리티

### 로깅
- Pino를 활용한 통합 로깅 시스템(edge 환경에서는 console.log 사용)
- 환경에 따른 로깅 설정
- 개발 환경에서의 가독성 높은 출력

### 파서 유틸리티
- AI JSON 응답 파싱
- 에러 핸들링을 포함한 JSON5 파싱
- 괄호 및 중괄호 정리 유틸리티

### 스타일 유틸리티
- Tailwind CSS 유틸리티
- 클래스 이름 병합 헬퍼
- 스타일 조합 도구
