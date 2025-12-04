# 요양원 웹사이트 템플릿

## 🚀 빠른 시작

### 1. 프로젝트 복사
```bash
# 새 프로젝트 생성
npx create-next-app@latest new-nursing-home --typescript --tailwind --app
cd new-nursing-home

# 필요한 파일 복사
# - app/components/NursingHomeWebsite.tsx
# - app/components/NursingHomeWebsite.module.css
# - app/components/Header.tsx
# - app/components/Header.module.css
```

### 2. 의존성 설치
```bash
npm install framer-motion lucide-react
```

### 3. 설정 변경
`app/page.tsx` 파일을 열고 `siteConfig` 객체만 수정하세요!

## 📝 설정 항목

### 필수 변경 사항
- ✅ `heroSlides` - 메인 슬라이더 이미지와 텍스트
- ✅ `aboutTitle` - 요양원 이름
- ✅ `aboutDescription` - 요양원 소개
- ✅ `facilities` - 시설 안내 (이미지 4개)
- ✅ `contactInfo.phone` - 전화번호
- ✅ `contactInfo.address` - 주소
- ✅ `contactInfo.copyrightText` - 저작권 텍스트

### Header 컴포넌트도 수정 필요
`app/components/Header.tsx`에서:
- 로고 이미지 경로 (`/logo.png`)
- 로고 alt 텍스트

## 🎨 이미지 준비

다음 이미지들을 `public` 폴더에 준비하세요:
- `/main_img_bg.jpg` - 메인 슬라이더 배경 이미지 (또는 각 슬라이드별 이미지)
- `/logo.png` - 로고 이미지
- 시설 안내 이미지 4개

## 📦 배포

```bash
npm run build
npm start
```

또는 Vercel, Netlify 등에 배포하세요!

