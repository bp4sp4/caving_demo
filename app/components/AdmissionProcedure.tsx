"use client";

import React from "react";
import styles from "./AdmissionProcedure.module.css";

interface AdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
}

const admissionSteps: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: "상담 및 문의",
    description:
      "전화 또는 온라인으로 입소 가능 여부와 궁금한 점을 문의하고 상세한 상담을 받으실 수 있습니다.",
  },
  {
    stepNumber: 2,
    title: "장기요양 등급 신청/확인",
    description:
      "국민건강보험공단에 장기요양 등급(1~5등급)을 신청/확인하고, 입소에 필요한 서류를 준비합니다.",
  },
  {
    stepNumber: 3,
    title: "방문 및 입소 심사",
    description:
      "보호자와 함께 요양원을 방문하여 시설을 둘러보고, 어르신의 건강 상태를 확인하는 입소 심사를 진행합니다.",
  },
  {
    stepNumber: 4,
    title: "계약 및 입소 결정",
    description:
      "심사 후 입소가 최종 결정되면 계약서 작성 및 입소일을 확정하고 필요한 개인 물품을 준비합니다.",
  },
];

const AdmissionProcedure: React.FC = () => {
  return (
    <section className={styles.procedureSection}>
      <h2 className={styles.sectionHeader}>
        입소 절차 <strong>4단계</strong> 안내
      </h2>
      <p className={styles.subtitle}>
        쉽고 명확한 입소 절차를 통해 안심하고 시작하세요.
      </p>

      <div className={styles.stepsContainer}>
        {admissionSteps.map((step, index) => (
          <React.Fragment key={step.stepNumber}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.stepNumber}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < admissionSteps.length - 1 && (
                <div className={styles.arrow} />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcedure;




