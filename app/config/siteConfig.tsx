"use client";

import React, { createContext, useContext, ReactNode } from "react";

// 인터페이스 정의
export interface ContactInfo {
  phone: string;
  address: string;
  hours: string;
  email?: string;
}

export interface MapLocation {
  address: string;
  latitude: number;
  longitude: number;
  detail?: string; // 예: "B동 9층 906호"
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FacilitiesSection {
  title: string;
  subtitle: string;
  facilities: Facility[];
}

export interface EducationGalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export interface EducationGallerySection {
  heading: string;
  demoUrl: string;
  items: EducationGalleryItem[];
}

export interface SiteConfig {
  logoPath?: string;
  logoText?: string;
  heroSlides: HeroSlide[];
  facilitiesSection?: FacilitiesSection;
  educationGallery?: EducationGallerySection;
  contactInfo: ContactInfo;
  mapLocation?: MapLocation;
  copyrightText?: string;
}

// Context 정의
interface SiteConfigContextType {
  config: SiteConfig;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(
  undefined
);

// Provider 컴포넌트
export function SiteConfigProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: SiteConfig;
}) {
  return (
    <SiteConfigContext.Provider value={{ config }}>
      {children}
    </SiteConfigContext.Provider>
  );
}

// Hook
export function useSiteConfig(): SiteConfig {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    // 기본값 반환
    return defaultSiteConfig;
  }
  return context.config;
}

// 기본 설정값
const defaultSiteConfig: SiteConfig = {
  logoPath: "/logo.png",
  heroSlides: [
    {
      id: "1",
      image: "/main/main_img001.png",
      title: "고용노동부계좌제 교육기관",
      subtitle: "한평생요양보호사 교육원",
    },
  ],
  contactInfo: {
    phone: "02-2135-9249",
    address: "서울시 도봉구 마들로 13길 61",
    hours: "평일 09:00 - 18:00",
  },
  copyrightText: "© 2025 한평생요양보호사교육원. All rights reserved.",
};

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
  facilitiesSection: {
    title: "요양보호사를\n취득해야 하는 이유",
    subtitle: "요양보호사는 어르신들의 건강과 안전을\n보장하는 중요한 인력입니다.",
    facilities: [
      {
        id: "1",
        title: "재취업 1위 자격증",
        description: "전문 교육과정으로 빠른 취업과 안정적인 수입 보장",
        image: "/main/pen.jpg",
      },
      {
        id: "2",
        title: "가족돌봄 요양 급여",
        description: "가족을 직접 돌볼 때 급여 지원을 받을 수 있어 경제적 부담을 줄일 수 있습니다.",
        image: "/main/famliy.jpg",
      },
      {
        id: "3",
        title: "국비지원 가능",
        description: "국비지원 가능으로 더 저렴한 비용으로 교육을 이수할 수 있습니다.",
        image: "/main/noing.jpg",
      },
    ],
  },
  contactInfo: {
    phone: "02-2135-9249",
    address: "서울시 도봉구 마들로 13길 61",
    hours: "평일 09:00 - 18:00",
    email: "info@example.com", // 이메일 (선택사항)
  },
  mapLocation: {
    address: "서울시 도봉구 마들로 13길 61",
    latitude: 37.6544,
    longitude: 127.0476,
    detail: "B동 9층 906호",
  },
  educationGallery: {
    heading: "교육원 소개",
    demoUrl: "/about",
    items: [
      {
        id: "edu-1",
        title: "전문 상담 서비스",
        summary:
          "요양보호사 교육과정, 국비지원, 취업 등 교육원에 대한 모든 궁금증을 전문 상담사가 친절하게 안내해드립니다.",
        url: "/about",
        image: "/main/main_about_001.jpeg",
      },
      {
        id: "edu-2",
        title: "전문적인 교육 시스템",
        summary:
          "20년 이상의 노하우와 체계적인 교육과정을 통해 요양보호사 자격증 취득을 위한 전문 교육을 제공합니다.",
        url: "/about",
        image: "/main/main_about_002.jpeg",
      },
      {
        id: "edu-3",
        title: "국비지원 가능",
        summary:
          "국비지원을 통해 부담 없이 교육을 받을 수 있으며, 빠른 재취업과 안정적인 수입을 보장받을 수 있습니다.",
        url: "/about",
        image: "/main/main_about_003.jpeg",
      },
      {
        id: "edu-4",
        title: "우수한 합격률",
        summary:
          "체계적인 교육 시스템과 전담 강사의 집중 관리로 높은 합격률을 자랑하며, 80대까지 모두 합격하셨습니다.",
        url: "/about",
        image: "/main/main_about_004.jpeg",
      },
      {
        id: "edu-5",
        title: "실습 중심 교육",
        summary:
          "이론과 실습을 병행하는 실무 중심 교육으로 현장에서 바로 활용할 수 있는 전문성을 갖출 수 있습니다.",
        url: "/Caregiver",
        image: "/main/main_about_005.jpeg",
      },
    ],
  },
  copyrightText: "© 2025 한평생요양보호사교육원. All rights reserved.",
};

