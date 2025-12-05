"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Heart,
  Users,
  Award,
  ChevronUp,
} from "lucide-react";
import styles from "./NursingHomeWebsite.module.css";
import FacilitiesGallery from "./FacilitiesGallery";


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

const NursingHomeWebsite = ({
  heroSlides = defaultHeroSlides,
  services = defaultServices,
  facilities = defaultFacilities,
  aboutTitle = "우리 요양원 소개",
  aboutDescription =
    "저희 요양원은 어르신들께 가족 같은 따뜻함과 전문적인 케어를 제공하는 것을 최우선으로 생각합니다. 20년 이상의 노하우와 경험을 바탕으로 어르신들의 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.",
  contactInfo = {
    phone: "02-1234-5678",
    address: "서울특별시 강남구 테헤란로 123",
    hours: "평일 09:00 - 18:00",
  },
}: NursingHomeProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openQaIndex, setOpenQaIndex] = useState<number | null>(null);

  const toggleQa = (index: number) => {
    setOpenQaIndex(openQaIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className={styles.container}>
      {/* Hero Section with Slideshow */}
      <section className={styles.heroSection}>
        <AnimatePresence mode="wait">
          {heroSlides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                  className={styles.heroSlide}
                >
                  <div
                    className={styles.heroBackground}
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className={styles.heroOverlay} />
                  <div className={styles.heroContent}>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className={styles.heroTextContainer}
                    >
                      <h1 className={styles.heroTitle}>{slide.title}</h1>
                      <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                      <button className={styles.heroButton}> 더 알아보기 </button>
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        {/* Slide Indicators */}
        <div className={styles.heroIndicators}>
          {heroSlides.map((_, index) => (
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

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>{aboutTitle}</h2>
            <p className={styles.aboutDescription}>{aboutDescription}</p>
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      

      {/* Facilities Gallery */}
      <FacilitiesGallery facilities={facilities} />

      {/* Q&A Section */}
      <section className={styles.qaSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          <div className={styles.qaList}>
            <div className={styles.qaItem}>
              <button 
                className={`${styles.qaQuestion} ${openQaIndex === 0 ? styles.qaQuestionOpen : ''}`}
                onClick={() => toggleQa(0)}
              >
                
                <span className={styles.qaText}>요양보호사 자격증은 어떻게 취득하나요?</span>
                <ChevronUp className={`${styles.qaChevron} ${openQaIndex === 0 ? styles.qaChevronOpen : ''}`} />
              </button>
              <div className={`${styles.qaAnswer} ${openQaIndex === 0 ? styles.qaAnswerOpen : ''}`}>
                <p>
                  요양보호사 자격증은 고용노동부 지정 교육기관에서 240시간의 교육을 이수한 후, 
                  자격시험에 합격하면 취득할 수 있습니다. 저희 교육원에서는 체계적인 교육과정을 
                  통해 자격증 취득을 지원하고 있습니다.
                </p>
              </div>
            </div>
            <div className={styles.qaItem}>
              <button 
                className={`${styles.qaQuestion} ${openQaIndex === 1 ? styles.qaQuestionOpen : ''}`}
                onClick={() => toggleQa(1)}
              >
                
                <span className={styles.qaText}>교육 기간은 얼마나 걸리나요?</span>
                <ChevronUp className={`${styles.qaChevron} ${openQaIndex === 1 ? styles.qaChevronOpen : ''}`} />
              </button>
              <div className={`${styles.qaAnswer} ${openQaIndex === 1 ? styles.qaAnswerOpen : ''}`}>
                <p>
                  기본 교육과정은 약 2-3개월 정도 소요됩니다. 주말반과 평일반을 운영하고 있어 
                  직장인도 수강이 가능합니다. 자세한 일정은 상담을 통해 안내해드립니다.
                </p>
              </div>
            </div>
            <div className={styles.qaItem}>
              <button 
                className={`${styles.qaQuestion} ${openQaIndex === 2 ? styles.qaQuestionOpen : ''}`}
                onClick={() => toggleQa(2)}
              >
                
                <span className={styles.qaText}>교육비는 얼마인가요?</span>
                <ChevronUp className={`${styles.qaChevron} ${openQaIndex === 2 ? styles.qaChevronOpen : ''}`} />
              </button>
              <div className={`${styles.qaAnswer} ${openQaIndex === 2 ? styles.qaAnswerOpen : ''}`}>
                <p>
                  교육비는 과정에 따라 상이하며, 고용노동부 계좌제 지원을 받을 수 있습니다. 
                  정확한 교육비와 지원금액은 상담을 통해 안내해드립니다.
                </p>
              </div>
            </div>
            <div className={styles.qaItem}>
              <button 
                className={`${styles.qaQuestion} ${openQaIndex === 3 ? styles.qaQuestionOpen : ''}`}
                onClick={() => toggleQa(3)}
              >
                <span className={styles.qaText}>자격증 취득 후 취업 지원이 되나요?</span>
                <ChevronUp className={`${styles.qaChevron} ${openQaIndex === 3 ? styles.qaChevronOpen : ''}`} />
              </button>
              <div className={`${styles.qaAnswer} ${openQaIndex === 3 ? styles.qaAnswerOpen : ''}`}>
                <p>
                  네, 저희 교육원에서는 자격증 취득 후 취업 상담 및 알선 서비스를 제공하고 있습니다. 
                  다양한 요양시설과의 네트워크를 통해 취업 기회를 제공해드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className={styles.consultationSection}>
        <div className={styles.consultationContainer}>
          <div className={styles.consultationInfo}>
            <h2 className={styles.consultationTitle}>상담 신청</h2>
            <p className={styles.consultationDescription}>
              궁금한 점이 있으시면 언제든지 문의해 주세요<span className={styles.mobileBreak}><br/></span> 친절하게 상담해 드리겠습니다.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <Phone className={styles.contactDetailIcon} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className={styles.contactDetailItem}>
                <MapPin className={styles.contactDetailIcon} />
                <span>{contactInfo.address}</span>
              </div>
              <div className={styles.contactDetailItem}>
                <Clock className={styles.contactDetailIcon} />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>{contactInfo.copyrightText || "© 2024 요양원. All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
};

export default NursingHomeWebsite;

