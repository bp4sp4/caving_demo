"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSection.module.css";

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
}

const defaultSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/main_img_bg.jpg",
    title: "따뜻한 보살핌",
    subtitle: "가족같은 사랑으로 함께합니다",
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

export default function HeroSection({ slides = defaultSlides }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.heroSection}>
      <AnimatePresence mode="wait">
        {slides.map(
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
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className={styles.heroIndicators}>
        {slides.map((_, index) => (
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
  );
}

