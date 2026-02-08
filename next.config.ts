import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages에 정적 export로 배포하기 위한 설정
  output: "export",
  // 리포지토리 이름으로 basePath/assetPrefix를 설정합니다. 필요 시 변경하세요.
  basePath: "/caving_demo",
  assetPrefix: "/caving_demo",
};

export default nextConfig;
