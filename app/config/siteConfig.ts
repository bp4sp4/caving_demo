import { SiteConfig } from "../contexts/SiteConfigContext";

// 여기서만 데이터를 변경하면 됩니다!
export const siteConfig: SiteConfig = {
  logoPath: "/logo.png", // 로고 이미지 경로 (logoText가 있으면 무시됨)
  logoText: undefined, // 로고 대신 텍스트 사용 시: "한평생요양보호사교육원"
  heroSlides: [
    {
      id: "1",
      image: "/main/main_img001.png",
      title: "고용노동부계좌제 교육기관",
      subtitle: "한평생요양보호사 교육원 ",
    },
    {
      id: "2",
      image: "/main/main_img002.png",
      title: "고용노동부계좌제 교육기관",
      subtitle: "한평생요양보호사 교육원 ",
    },
  ],
  contactInfo: {
    phone: "02-2135-9249",
    address: "서울시 도봉구 마들로 13길 61",
    hours: "평일 09:00 - 18:00",
    email: "info@example.com", // 이메일 (선택사항)
  },
  copyrightText: "© 2025 한평생요양보호사교육원. All rights reserved.",
};

