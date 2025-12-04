import Link from "next/link";
import styles from "./AdmissionProcess.module.css";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function AdmissionProcess() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "상담",
      description: "전화 또는 방문 상담을 통해 입소에 대한 모든 궁금증을 해결하세요.",
    },
    {
      number: "02",
      title: "신청/심사",
      description: "입소 신청서 작성 후 건강 상태 및 입소 자격 심사를 진행합니다.",
    },
    {
      number: "03",
      title: "입소",
      description: "심사 완료 후 입소 일정을 확정하고 안전하게 입소합니다.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle}>입소 절차 안내</h2>
        <p className={styles.sectionSubtitle}>
          간단한 3단계로 시작하는 새로운 생활
        </p>
        <div className={styles.processFlow}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.arrow}>→</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.ctaBox}>
          <Link href="/consult" className={styles.ctaButton}>
            무료 상담 신청하기
          </Link>
        </div>
      </div>
    </section>
  );
}



