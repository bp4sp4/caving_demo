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

      {/* Consultation Section */}
      <section className={styles.consultationSection}>
        <div className={styles.consultationContainer}>
          <div className={styles.consultationInfo}>
            <h2 className={styles.consultationTitle}>상담 신청</h2>
            <p className={styles.consultationDescription}>
              궁금한 점이 있으시면 언제든지 문의해 주세요. 친절하게 상담해
              드리겠습니다.
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
          <div className={styles.consultationForm}>
            <h3 className={styles.formTitle}>상담 신청서</h3>
            <p className={styles.formDescription}>
              정보를 입력해 주시면 빠르게 연락드리겠습니다.
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact" className={styles.formLabel}>
                  연락처
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className={styles.formInput}
                  placeholder="연락처를 입력해주세요"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="inquiry" className={styles.formLabel}>
                  문의 내용
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  className={styles.formTextarea}
                  placeholder="문의 내용을 입력해주세요"
                  rows={5}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                상담 신청하기
              </button>
            </form>
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

