"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Heart,
  Users,
  Award,
} from "lucide-react";
import styles from "./NursingHomeWebsite.module.css";
import FacilitiesGallery from "./FacilitiesGallery";
import { Feature197, type FeatureItem } from "./Feature197";
import { useSiteConfig } from "../config/siteConfig";
import { Gallery6 } from "./ui/gallery6";


interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FacilityImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface NursingHomeProps {
  heroSlides?: HeroSlide[];
  services?: ServiceCard[];
  facilities?: FacilityImage[];
  feature197Items?: FeatureItem[];
  aboutTitle?: string;
  aboutDescription?: string;
  contactInfo?: {
    phone: string;
    address: string;
    hours: string;
    copyrightText?: string;
  };
}

const defaultHeroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/main_img_bg.jpg",
    title: "고용노동부계좌제 교육기관",
    subtitle: "한평생요양보호사 교육원",
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
];

const defaultServices: ServiceCard[] = [
  {
    id: "1",
    icon: <Heart className={styles.serviceIcon} />,
    title: "24시간 간호",
    description:
      "전문 간호사가 24시간 상주하여 어르신들의 건강을 세심하게 돌봅니다.",
  },
  {
    id: "2",
    icon: <Users className={styles.serviceIcon} />,
    title: "맞춤형 케어",
    description:
      "개인별 건강 상태에 맞춘 맞춤형 케어 프로그램을 제공합니다.",
  },
  {
    id: "3",
    icon: <Award className={styles.serviceIcon} />,
    title: "재활 프로그램",
    description:
      "전문 물리치료사의 체계적인 재활 운동 프로그램을 운영합니다.",
  },
];

const defaultFacilities: FacilityImage[] = [
  {
    id: "1",
    title: "쾌적한 거주 공간",
    description:
      "넓고 밝은 개인실과 공용 공간으로 편안한 생활을 제공합니다.",
    image: "/main_img_bg.jpg",
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
];

const defaultFeature197Items: FeatureItem[] = [
  {
    id: 1,
    title: "누구나 수강할 수 있나요?",
    image: "/main/qna01.jpeg",
    description:
      "요양보호사 자격증은 고등학교 졸업 이상이라면 누구나 수강 가능합니다.",
  },
  {
    id: 2,
    title: "나이 제한이 있나요?",
    image: "/main/qna02.jpeg",
    description:
      "공부 시작에 나이제한은 따로 없으며 실제로 60대 이후에 시작하시는 분들도 많습니다.",
  },
  {
    id: 3,
    title: "공부가 어렵지 않나요?",
    image: "/main/qna04.jpeg",
    description:
      "처음엔 익숙하지 않을 수 있지만, 조금만 적응하시면 대부분 합격하고 계십니다. 체계적인 교육원의 시스템과 함께 80대까지 모두 합격하셨으니, 걱정하지 않으셔도 됩니다.",
  },
  {
    id: 4,
    title: "기간은 얼마나 걸리나요?",
    image: "/main/qna03.jpeg",
    description:
      "기본 교육과정은 약 2-3개월 정도 소요됩니다. 주말반과 평일반에 따라 기간이 달라질 수 있어 자세한 일정은 상담을 통해 안내 도와드리겠습니다.",
  },

];

const NursingHomeWebsite = ({
  heroSlides,
  services = defaultServices,
  facilities = defaultFacilities,
  feature197Items = defaultFeature197Items,
  aboutTitle = "우리 요양원 소개",
  aboutDescription =
    "저희 요양원은 어르신들께 가족 같은 따뜻함과 전문적인 케어를 제공하는 것을 최우선으로 생각합니다. 20년 이상의 노하우와 경험을 바탕으로 어르신들의 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.",
  contactInfo,
}: NursingHomeProps) => {
  const config = useSiteConfig();
  const finalHeroSlides = heroSlides ?? config.heroSlides;
  const finalContactInfo = contactInfo ?? config.contactInfo;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.container}>
      {/* Hero Section with Slideshow */}
      <section className={styles.heroSection}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={finalHeroSlides.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className={styles.heroSwiper}
          allowTouchMove={true}
        >
          {finalHeroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.heroSlide}>
                <div
                  className={styles.heroBackground}
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                  <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle}>{slide.title}</h1>
                    <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                    <button className={styles.heroButton}> 더 알아보기 </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slide Indicators */}
        <div className={styles.heroIndicators}>
          {finalHeroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${styles.indicator} ${
                currentSlide === index ? styles.indicatorActive : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>
      </section>

      {/* Latest Notices */}
      

      {/* Facilities Gallery */}
      <FacilitiesGallery />

      {/* Education Center Introduction Gallery */}
      <Gallery6
        heading="교육원 소개"
        demoUrl="/about"
        items={[
          {
            id: "edu-1",
            title: "전문적인 교육 시스템",
            summary:
              "20년 이상의 노하우와 체계적인 교육과정을 통해 요양보호사 자격증 취득을 위한 전문 교육을 제공합니다.",
            url: "/about",
            image: "/main/main_about_001.jpeg",
          },
          {
            id: "edu-2",
            title: "실습 중심 교육",
            summary:
              "이론과 실습을 병행하는 실무 중심 교육으로 현장에서 바로 활용할 수 있는 전문성을 갖출 수 있습니다.",
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
            title: "재취업 1위 자격증",
            summary:
              "요양보호사는 재취업 1위 자격증으로, 전문 교육과정을 통해 빠른 취업과 안정적인 수입을 보장받을 수 있습니다.",
            url: "/Caregiver",
              image: "/main/main_about_005.jpeg",
          },
        ]}
      />

      {/* Feature197 Accordion Section (자주 묻는 질문) */}
      <Feature197 features={feature197Items} />

      {/* Consultation Section */}
      <section className={styles.consultationSection}>
        <div className={styles.consultationContainer}>
          <div className={styles.consultationInfo}>
            <div className={styles.consultationTitleWrapper}>
              <p className={styles.consultationDescription}>
                친절하게 상담해 드리겠습니다.<br/>
                궁금한 점이 있으시면<span className={styles.mobileLineBreak}><br/></span> 언제든지 문의해 주세요.
              </p>
            </div>
            <div className={styles.contactDetailsGrid}>
              <div className={styles.contactDetailItem}>
                <p className={styles.contactDetailLabel}>전화번호</p>
                <span className={styles.contactDetailPhone}>{finalContactInfo.phone}</span>
              </div>
              <div className={styles.contactDetailItem}>
                <p className={styles.contactDetailLabel}>찾아오시는길</p>
                <span className={styles.contactDetailValue}>{finalContactInfo.address}</span>
              </div>
              <div className={styles.contactDetailItem}>
                <p className={styles.contactDetailLabel}>운영시간</p>
                <span className={styles.contactDetailValue}>{finalContactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NursingHomeWebsite;

