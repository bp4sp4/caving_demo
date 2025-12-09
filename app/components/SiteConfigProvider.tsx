"use client";

import { SiteConfigProvider as Provider, siteConfig } from "../config/siteConfig";

export default function SiteConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider config={siteConfig}>{children}</Provider>;
}

