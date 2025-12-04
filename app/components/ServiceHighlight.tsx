"use client";

import React from "react";
import styles from "./ServiceHighlight.module.css";

interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

const coreValues: ValueProp[] = [
  {
    icon: "🏥",
    title: "24시간 전문 간호 시스템",
    description:
      "전문 간호사가 24시간 상주하며 어르신들의 건강 상태를 세심하게 모니터링하고 응급 상황에 즉시 대응합니다.",
  },
  {
    icon: "🧘‍♀️",
    title: "개별 맞춤 재활 프로그램",
    description:
      "물리치료사, 작업치료사가 1:1 맞춤형 재활 계획을 수립하여 잔존 기능 유지 및 회복을 최우선 목표로 합니다.",
  },
  {
    icon: "🍎",
    title: "영양 균형 맞춤 식단 제공",
    description:
      "전담 영양사가 어르신의 건강 상태와 기호에 맞춘 저염식 및 치료식 식단을 매일 신선하게 준비합니다.",
  },
];

const ServiceHighlight: React.FC = () => {
  return (
    <section className={styles.valueSection}>
      <h2 className={styles.sectionHeader}>
        우리 요양원의 <strong>3가지 특별함</strong>
      </h2>
      <p className={styles.subtitle}>
        어르신들의 편안하고 건강한 노후를 위한 핵심 가치를 소개합니다.
      </p>

      <div className={styles.cardsContainer}>
        {coreValues.map((value, index) => (
          <div key={index} className={styles.valueCard}>
            <span className={styles.icon}>{value.icon}</span>
            <h3 className={styles.cardTitle}>{value.title}</h3>
            <p className={styles.cardDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlight;



