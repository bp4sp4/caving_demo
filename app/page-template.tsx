// 다른 요양원 프로젝트를 만들 때 이 파일을 page.tsx로 복사해서 사용하세요!
// siteConfig 부분만 수정하면 됩니다.

"use client";

import Header from "./components/Header";
import NursingHomeWebsite from "./components/NursingHomeWebsite";

export default function Home() {
  // ⭐ 여기서만 데이터를 변경하면 됩니다!
  const siteConfig = {
    // 메인 슬라이더 설정
    heroSlides: [
      {
        id: "1",
        image: "/main_img_bg.jpg", // 이미지 경로 변경
        title: "따뜻한 보살핌", // 제목 변경
        subtitle: "가족같은 사랑으로 함께합니다", // 부제목 변경
      },
      {
        id: "2",
        image: "/main_img_bg.jpg",
        title: "전문적인 케어",
        subtitle: "24시간 전문 간호 서비스",
      },
      {
        id: "3",
        image: "/main_img_bg.jpg",
        title: "편안한 환경",
        subtitle: "쾌적하고 안전한 생활공간",
      },
    ],

    // 소개 섹션 설정
    aboutTitle: "우리 요양원 소개", // 제목 변경
    aboutDescription:
      "저희 요양원은 어르신들께 가족 같은 따뜻함과 전문적인 케어를 제공하는 것을 최우선으로 생각합니다. 20년 이상의 노하우와 경험을 바탕으로 어르신들의 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.", // 설명 변경

    // 시설 안내 설정
    facilities: [
      {
        id: "1",
        title: "쾌적한 거주 공간", // 제목 변경
        description:
          "넓고 밝은 개인실과 공용 공간으로 편안한 생활을 제공합니다.", // 설명 변경
        image: "/main_img_bg.jpg", // 이미지 경로 변경
      },
      {
        id: "2",
        title: "최신 의료 시설",
        description:
          "최신 의료 장비를 갖춘 건강관리실에서 정기적인 건강 체크를 받으실 수 있습니다.",
        image: "/main_img_bg.jpg",
      },
      {
        id: "3",
        title: "여가 활동 공간",
        description:
          "다양한 취미 활동과 프로그램을 즐길 수 있는 여가 공간을 마련했습니다.",
        image: "/main_img_bg.jpg",
      },
      {
        id: "4",
        title: "식당 및 영양 관리",
        description:
          "영양사가 관리하는 균형잡힌 식단으로 건강한 식사를 제공합니다.",
        image: "/main_img_bg.jpg",
      },
    ],

    // 연락처 정보 설정
    contactInfo: {
      phone: "02-1234-5678", // 전화번호 변경
      address: "서울특별시 강남구 테헤란로 123", // 주소 변경
      hours: "평일 09:00 - 18:00", // 운영시간 변경
      copyrightText: "© 2024 요양원. All rights reserved.", // 저작권 텍스트 변경
    },
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



