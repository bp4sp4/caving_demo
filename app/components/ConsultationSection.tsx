"use client";

import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import styles from "./ConsultationSection.module.css";

interface ConsultationSectionProps {
  contactInfo?: {
    phone: string;
    address: string;
    hours: string;
  };
}

export default function ConsultationSection({
  contactInfo = {
    phone: "02-1234-5678",
    address: "서울특별시 강남구 테헤란로 123",
    hours: "평일 09:00 - 18:00",
  },
}: ConsultationSectionProps) {
  return (
    <section className={styles.consultationSection}>
      <div className={styles.consultationContainer}>
        <div className={styles.consultationInfo}>
          <h2 className={styles.consultationTitle}>상담 신청</h2>
          <p className={styles.consultationDescription}>
            궁금한 점이 있으시면 언제든지 문의해 주세요. 친절하게 상담해
            드리겠습니다.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetailItem}>
              <Phone className={styles.contactDetailIcon} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className={styles.contactDetailItem}>
              <MapPin className={styles.contactDetailIcon} />
              <span>{contactInfo.address}</span>
            </div>
            <div className={styles.contactDetailItem}>
              <Clock className={styles.contactDetailIcon} />
              <span>{contactInfo.hours}</span>
            </div>
          </div>
        </div>
        <div className={styles.consultationForm}>
          <h3 className={styles.formTitle}>상담 신청서</h3>
          <p className={styles.formDescription}>
            정보를 입력해 주시면 빠르게 연락드리겠습니다.
          </p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                placeholder="이름을 입력해주세요"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact" className={styles.formLabel}>
                연락처
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className={styles.formInput}
                placeholder="연락처를 입력해주세요"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="inquiry" className={styles.formLabel}>
                문의 내용
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                className={styles.formTextarea}
                placeholder="문의 내용을 입력해주세요"
                rows={5}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              상담 신청하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



