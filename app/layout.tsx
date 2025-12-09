import type { Metadata } from "next";
import "./globals.css";
import SiteConfigProvider from "./components/SiteConfigProvider";

export const metadata: Metadata = {
  title: "한평생요양보호사교육원",
  description: "한평생요양보호사교육원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SiteConfigProvider>
          {children}
        </SiteConfigProvider>
      </body>
    </html>
  );
}
