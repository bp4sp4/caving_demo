"use client";

import React, { createContext, useContext, ReactNode } from "react";

export interface ContactInfo {
  phone: string;
  address: string;
  hours: string;
  email?: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface SiteConfig {
  logoPath?: string;
  logoText?: string;
  heroSlides: HeroSlide[];
  contactInfo: ContactInfo;
  copyrightText?: string;
}

interface SiteConfigContextType {
  config: SiteConfig;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(
  undefined
);

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

export function useSiteConfig(): SiteConfig {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    // 기본값 반환
    return {
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
  }
  return context.config;
}

