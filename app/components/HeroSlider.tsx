"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./HeroSlider.module.css";

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSliderProps {
  slides: SlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <section id="main_slide" className={styles.mainSlide}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.swiper}
        aria-label="메인 슬라이더"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideItem}>
              <div className={styles.slideContent}>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <p className={styles.description}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}




