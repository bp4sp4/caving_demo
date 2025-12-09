"use client";

import React from "react";
import styles from "./CourseInfo.module.css";

export default function CourseInfo() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>교육과정 안내</h1>
            <p className={styles.heroDescription}>
             처음시작하시는 분도, 자격을 이미 갖추신 분도 수강생의 상황에 맞춰,<br/>
             [신규자반]과[자격증소지자반] 두 가지 과정을 운영하고 있습니다. 
            </p>
          </div>
          <div className={styles.heroIllustration}>
            {/* 3D 일러스트 영역 - 이미지로 대체 가능 */}
          </div>
        </div>
    
      </section>



      {/* Three Column Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {/* Left Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>신규자반 과정</h3>
            <p className={styles.boxMainText}>
              요양보호사 자격증을 처음<br/> 준비하시는 분을 위한 기본 과정입니다.
            </p>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                이론 교육
              </div>
              <ul className={styles.subSectionList}>
                <li>320시간 (이론·실기 240시간 + 현장실습 80시간)</li>
              </ul>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                실습 교육
              </div>
              <ul className={styles.subSectionList}>
                <li>주간반 40일 과정 | 야간반 70일 과정</li>
              </ul>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                교육 시간
              </div>
              <ul className={styles.subSectionList}>
                <li>주간반 9:00 ~ 17:00 | 야간반 18:00 ~ 21:00</li>
              </ul>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                지원 자격
              </div>
              <ul className={styles.subSectionList}>
                <li>연령, 학력, 경력 제한 없이 누구나 가능</li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <img src="/cbt/newclass.png" alt="신규자반 과정" className={styles.courseImage} />
            </div>
          </div>

          {/* Middle Box */}
          <div className={styles.contentBox}>
            <h3 className={styles.boxTitle}>자격증 소지자반 과정</h3>
            <p className={styles.boxMainText}>
              실무 현장에서 바로 활용할 수 있는<br/>
              전문 지식과 기술을 습득할 수 있습니다.
            </p>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                총 교육 시간
              </div>
              <ul className={styles.subSectionList}>
                <li>40-50시간(이론·실기 32~42시간 + 현장실습 8시간)</li>
              </ul>

            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                교육 기간
              </div>
              <ul className={styles.subSectionList}>
                <li>주 1회(5~6주 과정)</li>
              </ul>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                교육 시간
              </div>
              <ul className={styles.subSectionList}>
                <li>주말반 토요일 9:00 ~ 17:30</li>
              </ul>
            </div>
            <div className={styles.boxSubSection}>
              <div className={styles.subSectionHeader}>
                지원 자격
              </div>
              <ul className={styles.subSectionList}>
                <li>간호사, 간호조무사, 사회복지사, 작업치료사, 물리치료사</li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <img src="/cbt/basicclass.png" alt="신규자반 과정" className={styles.courseImage} />
            </div>
          </div>

         
        </div>
      </section>

    </div>
  );
}

