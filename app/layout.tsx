import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "섬기미요양보호사교육원",
  description: "요양보호사 교육기관",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
