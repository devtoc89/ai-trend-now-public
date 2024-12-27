# @repo/ui

공통 UI 컴포넌트 라이브러리입니다. Next.js 기반의 앱들에서 재사용 가능한 UI 컴포넌트들을 제공합니다.

## 특징

- Radix UI 기반의 접근성 높은 컴포넌트
- Tailwind CSS를 활용한 스타일링
- Shadcn UI 스타일 가이드 적용
- TypeScript 지원

## 설치

프로젝트는 pnpm workspace를 사용하므로 아래와 같이 의존성을 추가할 수 있습니다:

```bash
pnpm add @repo/ui
```

src/
├── components/ # UI 컴포넌트
│ └── ui/ # 기본 컴포넌트 (*현행 사용)
├── atoms/ # 복합 컴포넌트(*deprecated: 제거 예정)
├── molecules/ # 복합 컴포넌트(*deprecated: 제거 예정)
├── organisms/ # 복합 컴포넌트(*deprecated: 제거 예정)
├── hooks/ # 커스텀 훅
└── globals.css # 전역 스타일

## 사용 예시

```tsx
import { Button } from '@repo/ui/components/ui/button';
```