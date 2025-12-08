"use client";

import Header from "./components/Header";
import NursingHomeWebsite from "./components/NursingHomeWebsite";

export default function Home() {
  // 여기서만 데이터를 변경하면 됩니다!
  const siteConfig = {
    heroSlides: [
      {
        id: "1",
        image: "/main_img001.png",
        title: "고용노동부계좌제 교육기관",
        subtitle: "한평생요양보호사 교육원 ",
      },
      {
        id: "2",
        image: "/main_img002.png",
        title: "고용노동부계좌제 교육기관",
        subtitle: "한평생요양보호사 교육원 ",
      },
   
    ],
    aboutTitle: "요양보호사 교육원",
    aboutDescription:
      "저희 요양원은 어르신들께 가족 같은 따뜻함과 전문적인 케어를 제공하는 것을 최우선으로 생각합니다. 20년 이상의 노하우와 경험을 바탕으로 어르신들의 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.",
    facilities: [
      {
        id: "1",
        title: "재취업 1위 자격증 ",
        description:
          "전문 교육과정으로 빠른 취업과 안정적인 수입 보장",
        image: "/pen.png",
      },
      {
        id: "2",
        title: "가족돌봄 요양 급여",
        description:
          "가족을 직접 돌볼 때 급여 지원을 받을 수 있어 경제적 부담을 줄일 수 있습니다.",
        image: "/famliy.jpg",
      },
      {
        id: "3",
        title: "국비지원 가능",
        description:
          "국비지원 가능으로 더 저렴한 비용으로 교육을 이수할 수 있습니다.",
        image: "/noing.jpg",
      },
    ],
    contactInfo: {
      phone: "02-2135-9249",
      address: "서울시 도봉구 마들로 13길 61",
      hours: "평일 09:00 - 18:00",
    },
    copyrightText: "© 2024 요양원. All rights reserved.",
  };

  return (
    <div>
      <Header />
      <main>
        <NursingHomeWebsite {...siteConfig} />
      </main>
    </div>
  );
}
