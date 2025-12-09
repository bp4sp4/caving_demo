"use client";

import React from "react";
import styles from "./AboutInfo.module.css";

export default function AboutInfo() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>요양보호사 교육원</h1>
            <p className={styles.heroDescription}>
              저희 요양원은 어르신들께 가족 같은 따뜻함과 전문적인 케어를 제공하는 것을 최우선으로 생각합니다.<br/> 20년 이상의 노하우와 경험을 바탕으로 어르신들의 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.
            </p>
          </div>
          
        </div>
         </section>
         <section className={styles.whyChooseSection}>
           <div className={styles.whyChooseContainer}>
             <h2 className={styles.whyChooseTitle}>왜 한평생요양원을 선택해야 할까요?</h2>
             
             <div className={styles.featuresGrid}>
               {/* Feature Card 1 */}
               <div className={styles.featureCard}>
                 <div className={styles.featureHeader}>
                   서울시 지정서<br/> 발급 교육기관
                 </div>
                 <p className={styles.featureDescription}>
                   서울시 지정서를 발급받은<br/>  믿을 수 있는 교육기관입니다.
                 </p>
                 <div className={styles.featureIcon}>
                   <img src="/about/hand.png" alt="" />
                 </div>
                 <div className={styles.featureHashtag}>
                   <span className={styles.hashtagText}># 공신력 있는 기관</span>
                 </div>
               </div>

               {/* Feature Card 2 */}
               <div className={styles.featureCard}>
                 <div className={styles.featureHeader}>
                   우수한 강사진
                 </div>
                 <p className={styles.featureDescription}>
                   실전 경험이 풍부한 강사진의 <br/>적중률 높은 수업
                 </p>
                 <div className={styles.featureIcon}>
                   <img src="/about/best.png" alt="" />
                 </div>
                 <div className={styles.featureHashtag}>
                   <span className={styles.hashtagText}># 베테랑 강사</span>
                 </div>
               </div>

               {/* Feature Card 3 */}
               <div className={styles.featureCard}>
                 <div className={styles.featureHeader}>
                   쾌적한 교육환경
                 </div>
                 <p className={styles.featureDescription}>
                   쾌적한 환경에서<br/> 집중도 높은 교육 경험
                 </p>
                 <div className={styles.featureIcon}>
                   <img src="/about/book.png" alt="" />
                 </div>
                 <div className={styles.featureHashtag}>
                   <span className={styles.hashtagText}># 최신식 교실</span>
                 </div>
               </div>

               {/* Feature Card 4 */}
               <div className={styles.featureCard}>
                 <div className={styles.featureHeader}>
                   합격 책임제 & 취업 지원
                 </div>
                 <p className={styles.featureDescription}>
                   무료 책임 특강 운영<br/> 취업 연계 혜택까지 제공
                 </p>
                 <div className={styles.featureIcon}>
                   <img src="/about/counsel.png" alt="" />
                 </div>
                 <div className={styles.featureHashtag}>
                   <span className={styles.hashtagText}># 논스톱 취업시스템</span>
                 </div>
               </div>
             </div>
            
           </div>
             <div className={styles.whyChooseDescription}>
               <p>
                 수많은 교육생과 함께한 노하우로<br/>
                 <span className={styles.whyChooseDescriptionHighlight}>&lsquo;합격의 길&rsquo;</span>을 알고,<span className={styles.mobileBreak1}><br/></span> 그 길 <span className={styles.whyChooseDescriptionHighlight}>&lsquo;끝까지 함께&rsquo;</span>합니다.
      </p>
    </div>
  </section>
</div>
);
}
