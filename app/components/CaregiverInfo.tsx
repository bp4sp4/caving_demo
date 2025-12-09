"use client";

import React, { useEffect, useState } from "react";
import styles from "./CaregiverInfo.module.css";

export default function CaregiverInfo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroDescription =
    "일상적인 돌봄을 필요로 하는 어르신들이\n 고령화 시대에 더욱 늘어나고 있습니다.<br/>저희 교육원은 따뜻한 마음과 전문성을 겸비한 요양보호사를\n 양성하며, 더 아름다운 사회를 함께 일궈나갑니다.";
  const mobileHeroDescription = heroDescription.replace(/<br\s*\/?>/g, "\n");

  const introDescription =
    "요양보호사란 전문 교육기관의 과정을 수료하고,\n 국가시험 합격 및 자격증 취득을 마친\n 노인 돌봄 전문가를 말합니다.<br/>일상이나 거동이 힘든 어르신을 대상으로\n 가사 및 신체 활동을 지원하며,\n 곁에서 실질적인 도움을 드리는 역할을 수행합니다.";
  const mobileIntroDescription = introDescription.replace(/<br\s*\/?>/g, "\n");

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            
            <h1 className={styles.heroTitle}>요양보호사 안내</h1>
            {isMobile ? (
              <p className={`${styles.heroDescription} text-pre-line`}>
                {mobileHeroDescription}
              </p>
            ) : (
              <p
                className={styles.heroDescription}
                dangerouslySetInnerHTML={{ __html: heroDescription }}
              />
            )}
          </div>
        
        </div>
     
      </section>

      {/* What is a Caregiver Section */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h2 className={styles.introTitle}>요양보호사란?</h2>
          {isMobile ? (
            <p className={`${styles.introText} text-pre-line`}>
              {mobileIntroDescription}
            </p>
          ) : (
            <p
              className={styles.introText}
              dangerouslySetInnerHTML={{ __html: introDescription }}
            />
          )}
        </div>
      </section>

      {/* Three Column Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {/* Left Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>요양보호사가 하는 일</h3>
            <div className={styles.boxMainTextWrapper}>
              <p className={styles.boxMainText}>
              요양보호사란 어르신을 도와 일상적인 생활을<br/>
              유지할 수 있도록 돕는 전문가입니다.
              </p>
              <div className={styles.boxMainTextBorder}></div>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                신체활동 지원
              </div>
              <ul className={styles.subSectionList}>
                <li>식사, 목욕, 옷 입기, 이동 등 일상생활의 기초 활동 보조</li>
              </ul>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                일상생활 지원
              </div>
              <ul className={styles.subSectionList}>
                <li>청소, 세탁, 식사 준비 등 일상적인 가사 활동 지원</li>
              </ul>
            </div>
          </div>

          {/* Middle Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>요양보호사 제도가 생긴 이유</h3>
            <div className={styles.boxMainTextWrapper}>
              <p className={styles.boxMainText}>
              어르신을 돌보는 일은 결코 가벼운 일이 아닙니다. 실무 능력과 전문 지식을 겸비한 인재가 필수적이기 때문에 요양보호사 제도가 생겼습니다.
              </p>
              <div className={styles.boxMainTextBorder}></div>
            </div>
            <ul className={styles.checkList}>
              <li className={styles.specialListItem}>
              체계적인 교육 바탕으로 전문 인력 배출
              </li>
              <li>고령화 사회에 부합하는 고품질 요양 서비스</li>
              <li>
              기존 가정봉사원이나 생활지도원의 복지 전문성을 강화
              </li>
            </ul>
          </div>

          {/* Right Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>
              요양보호사 자격의 법적 근거
            </h3>
            <div className={styles.boxMainTextWrapper}>
              <p className={styles.boxMainText}>
              요양보호사는「노인복지법」제39조의2에 따라 발급되는 국가공인 자격증입니다.
              </p>
              <div className={styles.boxMainTextBorder}></div>
            </div>
            <ul className={styles.checkList}>
              <li>
              노인복지시설 내 요양보호사 배치는 필수입니다.

              </li>
              <li>반드시 지정받은 교육기관에서 교육을 수료해야 합니다.
              </li>
              <li>
              교육 수료 후 시·도지사의 검정을 거쳐 자격증이 교부됩니다.
              </li>
              <li>
              자격에 대한 세부 사항은 보건복지부령을 따르고 있습니다.
              </li>
              <li className={styles.warningText}>
                ※ 법 시행 전 교육 이수자는 효력이 인정되지 않습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
  
    </div>
  );
}

