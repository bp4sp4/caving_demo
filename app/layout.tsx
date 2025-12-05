import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
