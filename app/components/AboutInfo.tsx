"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./AboutInfo.module.css";

export default function AboutInfo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = isMobile
    ? ["/about/banner__mobile.png"]
    : ["/about/banner.png"];

  const featureCards = [
    {
      id: 1,
      header: (
        <>
          <span className={styles.featureHeaderHighlight}>서울시 지정서</span><br/>
          <span className={styles.featureHeaderHighlight}>발급 교육기관</span>
        </>
      ),
      description: "서울시 지정서를 발급받은<br/>  믿을 수 있는 교육기관입니다.",
      icon: "/about/hand.png",
      hashtag: "# 공신력 있는 기관"
    },
    {
      id: 2,
      header: <span className={styles.featureHeaderHighlight}>우수한 강사진</span>,
      description: "실전 경험이 풍부한 강사진의 <br/>적중률 높은 수업",
      icon: "/about/best.png",
      hashtag: "# 베테랑 강사"
    },
    {
      id: 3,
      header: <span className={styles.featureHeaderHighlight}>쾌적한 교육환경</span>,
      description: "쾌적한 환경에서<br/> 집중도 높은 교육 경험",
      icon: "/about/book.png",
      hashtag: "# 최신식 교실"
    },
    {
      id: 4,
      header: <span className={styles.featureHeaderHighlight}>합격 책임제 & 취업 지원</span>,
      description: "무료 책임 특강 운영<br/> 취업 연계 혜택까지 제공",
      icon: "/about/counsel.png",
      hashtag: "# 논스톱 취업시스템"
    }
  ];

  const heroDescriptionText =
    "저희 요양원은 어르신들께 가족 같은 따뜻함과\n 전문적인 케어를 제공하는 것을 최우선으로 생각합니다.<br/>20년 이상의 노하우와 경험을 바탕으로 어르신들의\n 건강하고 행복한 노후를 위해 최선을 다하고 있습니다.";
  const mobileDescription = heroDescriptionText.replace(/<br\s*\/?>/g, "\n");
  const desktopDescriptionHtml = heroDescriptionText.replace(/\n/g, " ");

  const mobileAboutTitle = "‘왜?’ 교육은 어렵게만\n느껴질까요?";
  const mobileWhyChooseTitle = "‘왜’ 한평생요양원을\n 선택해야 할까요?";

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>요양보호사 교육원</h1>
            {isMobile ? (
              <p className={styles.heroDescription}>{mobileDescription}</p>
            ) : (
              <p
                className={styles.heroDescription}
                dangerouslySetInnerHTML={{ __html: desktopDescriptionHtml }}
              />
            )}
          </div>
          
        </div>
         </section>
         <section className={styles.aboutInfoSection}>
          <div className={styles.aboutInfoContainer}>
          {isMobile ? (
            <h2 className={`${styles.aboutInfoTitle} text-pre-line`}>
              {mobileAboutTitle}
            </h2>
          ) : (
            <h2 className={styles.aboutInfoTitle}>
              &lsquo;<span className={styles.aboutInfoTitleHighlight}>왜?</span>&rsquo; 교육은 어렵게만 느껴질까요?
            </h2>
          )}
            <div className={styles.aboutInfoImage}>
              <img src={images[0]} alt="교육 소개 이미지" />
            </div>
          </div>
         </section>
         <section className={styles.whyChooseSection}>
           <div className={styles.whyChooseContainer}>
            {isMobile ? (
              <h2 className={`${styles.whyChooseTitle} text-pre-line`}>
                {mobileWhyChooseTitle}
              </h2>
            ) : (
              <h2 className={styles.whyChooseTitle}>
                &lsquo;<span className={styles.whyChooseTitleHighlight}>왜</span>&rsquo; 한평생요양원을 선택해야 할까요?
              </h2>
            )}
             
             {isMobile ? (
               <div className={styles.featuresSwiper}>
                 <Swiper
                   spaceBetween={15}
                   slidesPerView={1.2}
                   className={styles.featuresSwiperContainer}
                   style={{ width: '100%' }}
                 >
                   {featureCards.map((card) => (
                     <SwiperSlide key={card.id}>
                       <div className={styles.featureCard}>
                         <div className={styles.featureHeader}>
                           {card.header}
                         </div>
                         <p className={styles.featureDescription} dangerouslySetInnerHTML={{ __html: card.description }} />
                         <div className={styles.featureIcon}>
                           <img src={card.icon} alt="" />
                         </div>
                         <div className={styles.featureHashtag}>
                           <span className={styles.hashtagText}>{card.hashtag}</span>
                         </div>
                       </div>
                     </SwiperSlide>
                   ))}
                 </Swiper>
               </div>
             ) : (
               <div className={styles.featuresGrid}>
                 {featureCards.map((card) => (
                   <div key={card.id} className={styles.featureCard}>
                     <div className={styles.featureHeader}>
                       {card.header}
                     </div>
                     <p className={styles.featureDescription} dangerouslySetInnerHTML={{ __html: card.description }} />
                     <div className={styles.featureIcon}>
                       <img src={card.icon} alt="" />
                     </div>
                     <div className={styles.featureHashtag}>
                       <span className={styles.hashtagText}>{card.hashtag}</span>
                     </div>
                   </div>
                 ))}
               </div>
             )}
            
           </div>
             <div className={styles.whyChooseDescription}>
               <p>
                 수많은 교육생과 함께한 노하우로<br/>
                 <strong><span className={styles.whyChooseDescriptionHighlight}>&lsquo;합격의 길&rsquo;</span>을 알고,<span className={styles.mobileBreak1}><br/></span> 그 길 <span className={styles.whyChooseDescriptionHighlight}>&lsquo;끝까지 함께&rsquo;</span>합니다.</strong>
      </p>
    </div>  
  </section>
</div>
);
}
