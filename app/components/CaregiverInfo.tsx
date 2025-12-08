"use client";

import React from "react";
import styles from "./CaregiverInfo.module.css";

export default function CaregiverInfo() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            
            <h1 className={styles.heroTitle}>요양보호사 안내</h1>
            <p className={styles.heroDescription}>
              고령화 시대, 더 많은 어르신들이 일상적인 돌봄을 필요로 하고
              있습니다.<br/> 한평생요양보호사 교육원은 전문성과 따뜻한 마음을 갖춘 요양보호사 양성을
              통해 더 나은 사회를 함께 만들어갑니다.
            </p>
          </div>
          <div className={styles.heroIllustration}>
            {/* 3D 일러스트 영역 - 이미지로 대체 가능 */}
       
          </div>
        </div>
     
      </section>

      {/* What is a Caregiver Section */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h2 className={styles.introTitle}>요양보호사란?</h2>
          <p className={styles.introText}>
            요양보호사는 전문 교육기관에서 교육을 이수하고, 국가시험에 합격한
            후 자격증을 발급받은 노인돌봄 전문 인력입니다.<br/> 거동이 불편하거나
            일상생활이 어려운 어르신들에게 신체 활동 지원, 가사 지원 등
            실질적인 도움을 제공하는 역할을 합니다.
          </p>
        </div>
      </section>

      {/* Three Column Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {/* Left Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>요양보호사가 하는 일</h3>
            <p className={styles.boxMainText}>
              요양보호사는 어르신이 스스로 일상을<br/> 유지할 수 있도록 옆에서 돕는
              전문가입니다.
            </p>
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
            <p className={styles.boxMainText}>
              노인 돌봄은 쉽게 할 수 있는 일이 아닙니다. 전문 지식과 실무
              능력을 갖춘 인력이 필요하기에 요양보호사 제도가 도입되었습니다.
            </p>
            <ul className={styles.checkList}>
              <li>
                단순 돌봄을 넘어선 체계적인 교육 기반의 전문 인력 양성
              </li>
              <li>고령 사회에 걸맞는 질 높은 요양서비스 제공</li>
              <li>
                가정봉사원 및 생활지도원의 역할을 넘어서 복지 전문성 향상
              </li>
            </ul>
          </div>

          {/* Right Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>
              요양보호사 자격의 법적 근거
            </h3>
            <p className={styles.boxMainText}>
              요양보호사는 단순 민간자격이 아닙니다. 국가 공인 자격증으로
              노인복지법의 절차에 따라 발급됩니다. (「노인복지법」 제39조의2)
            </p>
            <ul className={styles.checkList}>
              <li>
                노인복지시설은 반드시 요양보호사를 배치해야 합니다.
              </li>
              <li>지정된 교육기관에서 교육을 이수해야 합니다.</li>
              <li>
                교육 이수 후, 시·도지사로부터 자격 검정 및 자격증을 발급 받습니다.
              </li>
              <li>
                자격 관련 세부 기준은 보건복지부령에 따라 운영됩니다.
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

