"use client";

import React from "react";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  title?: string;
  description?: string;
}

export default function AboutSection({
  title = "우리 요양원 소개",
  description = "저희 요양원은 어르신들께 가족 같은 따뜻함과 전문적인 케어를 제공하는 것을 최우선으로 생각합니다. 20년 이상의 노하우와 경험을 바탕으로 어르신들의 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.",
}: AboutSectionProps) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.aboutDescription}>{description}</p>
        </div>
      </div>
    </section>
  );
}




