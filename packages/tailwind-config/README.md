## @repo/tailwind-config
# 모노레포에서 사용되는 공통 Tailwind CSS 설정 패키지입니다.
## 개요
# 이 패키지는 모노레포 내의 다른 패키지와 애플리케이션에서 확장하여 사용할 수 있는 재사용 가능한 Tailwind CSS 설정을 제공합니다.

### 사용 예시

```typescript
import preset from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [preset],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // 추가 설정...
};
```

### 패키지 구조
packages/tailwind-config/
├── tailwind.config.ts  # 기본 설정
├── package.json        # 패키지 정보
└── tsconfig.json      # TypeScript 설정

## 설치
```
pnpm add @repo/tailwind-config
```