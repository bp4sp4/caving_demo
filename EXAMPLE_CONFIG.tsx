// 다른 요양원 프로젝트를 만들 때 이 파일을 참고하세요!
// page.tsx 파일의 siteConfig 부분을 이 예시처럼 수정하면 됩니다.

export const exampleSiteConfig = {
  // 메인 슬라이더 (3개 권장)
  heroSlides: [
    {
      id: "1",
      image: "/images/hero1.jpg", // public 폴더에 이미지 추가
      title: "사랑과 정성으로",
      subtitle: "어르신들의 행복한 노후를 함께합니다",
    },
    {
      id: "2",
      image: "/images/hero2.jpg",
      title: "전문 의료진 상주",
      subtitle: "24시간 건강 관리를 제공합니다",
    },
    {
      id: "3",
      image: "/images/hero3.jpg",
      title: "편안한 생활 환경",
      subtitle: "최신 시설로 안전하고 쾌적합니다",
    },
  ],

  // 소개 섹션
  aboutTitle: "○○요양원 소개",
  aboutDescription:
    "저희 ○○요양원은 2010년 설립 이후 어르신들께 따뜻한 보살핌과 전문적인 케어를 제공해오고 있습니다. 경험 많은 의료진과 최신 시설을 갖추고 있어 어르신들의 건강하고 행복한 생활을 보장합니다.",

  // 시설 안내 (4개 권장)
  facilities: [
    {
      id: "1",
      title: "개인실 및 공용 공간",
      description:
        "넓고 쾌적한 개인실과 다양한 공용 공간으로 편안한 생활을 제공합니다.",
      image: "/images/facility1.jpg",
    },
    {
      id: "2",
      title: "의료 시설",
      description:
        "최신 의료 장비를 갖춘 건강관리실에서 정기적인 건강 체크를 받으실 수 있습니다.",
      image: "/images/facility2.jpg",
    },
    {
      id: "3",
      title: "여가 프로그램",
      description:
        "다양한 취미 활동과 프로그램을 즐길 수 있는 여가 공간을 마련했습니다.",
      image: "/images/facility3.jpg",
    },
    {
      id: "4",
      title: "영양 식단",
      description:
        "전문 영양사가 관리하는 균형잡힌 식단으로 건강한 식사를 제공합니다.",
      image: "/images/facility4.jpg",
    },
  ],

  // 연락처 정보
  contactInfo: {
    phone: "02-0000-0000", // 전화번호 변경
    address: "서울특별시 ○○구 ○○로 123", // 주소 변경
    hours: "평일 09:00 - 18:00", // 운영시간 변경
    copyrightText: "© 2024 ○○요양원. All rights reserved.", // 저작권 텍스트 변경
  },
};

// 사용 예시:
// import { exampleSiteConfig } from './EXAMPLE_CONFIG';
// 
// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <NursingHomeWebsite {...exampleSiteConfig} />
//       </main>
//     </div>
//   );
// }

