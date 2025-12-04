# 요양원 웹사이트 템플릿 사용 가이드

## 📋 프로젝트 복사 방법

### 1. 새 프로젝트 생성
```bash
# 새 Next.js 프로젝트 생성
npx create-next-app@latest new-nursing-home --typescript --tailwind --app

# 또는 기존 프로젝트에 컴포넌트 복사
```

### 2. 필요한 파일 복사
다음 파일들을 새 프로젝트로 복사하세요:

**필수 파일:**
- `app/components/NursingHomeWebsite.tsx`
- `app/components/NursingHomeWebsite.module.css`
- `app/components/Header.tsx`
- `app/components/Header.module.css`

**의존성 설치:**
```bash
npm install framer-motion lucide-react
```

### 3. page.tsx 설정
`app/page.tsx` 파일에서 `siteConfig` 객체만 수정하면 됩니다!

## 🎨 설정 변경 가이드

### 기본 구조
```typescript
const siteConfig = {
  heroSlides: [...],      // 메인 슬라이더
  aboutTitle: "...",       // 소개 제목
  aboutDescription: "...", // 소개 내용
  facilities: [...],      // 시설 안내
  contactInfo: {...},     // 연락처 정보
  copyrightText: "..."    // 저작권 텍스트
};
```

### 예시: 다른 요양원 설정
아래 `EXAMPLE_CONFIG.tsx` 파일을 참고하세요.

