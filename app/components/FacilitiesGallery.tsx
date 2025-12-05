"use client";

import React from "react";
import styles from "./FacilitiesGallery.module.css";

interface FacilityImage {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FacilitiesGalleryProps {
  facilities?: FacilityImage[];
}

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
    title: " 및 영양 관리",
    description:
      "영양사가 관리하는 균형잡힌 식단으로 건강한 식사를 제공합니다.",
    image: "/main_img_bg.jpg",
  },
];

export default function FacilitiesGallery({
  facilities = defaultFacilities,
}: FacilitiesGalleryProps) {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.facilitiesHeader}>
        <div className={styles.facilitiesHeaderContent}>
          <h2 className={styles.facilitiesTitle}>요양보호사를 취득해야 하는 이유</h2>
          <p className={styles.facilitiesSubtitle}>
              요양보호사는 어르신들의 건강과 안전을 보장하는<span className={styles.mobileBreak}><br/></span> 중요한 인력입니다.
          </p>
        </div>
      </div>
      <div className={styles.facilitiesGrid}>
        {facilities.map((facility) => (
          <div key={facility.id} className={styles.facilityCard}>
            <div className={styles.facilityImageWrapper}>
              <img
                src={facility.image}
                alt={facility.title}
                className={styles.facilityImage}
              />
              <div className={styles.facilityOverlay}></div>
              <h3 
                className={styles.facilityCardTitle}
                dangerouslySetInnerHTML={{ __html: facility.title }}
              />
              <button className={styles.viewMoreButton}>
                자세히보기 +
              </button>
              <div className={styles.facilityCardContent}>
                <div className={styles.facilityCardText}>
                  <h3 
                    className={styles.facilityCardTitleCenter}
                    dangerouslySetInnerHTML={{ __html: facility.title }}
                  />
                  <p className={styles.facilityCardDescription}>
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

