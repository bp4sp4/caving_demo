import styles from "./CoreValues.module.css";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export default function CoreValues() {
  const values: ValueItem[] = [
    {
      icon: "👨‍⚕️",
      title: "전문 의료진 상주",
      description: "24시간 전문 의료진이 상주하여 언제든지 의료 서비스를 제공합니다.",
    },
    {
      icon: "🍽️",
      title: "맞춤형 영양 식단",
      description: "개인별 건강 상태에 맞춘 전문 영양사가 설계한 식단을 제공합니다.",
    },
    {
      icon: "🏃",
      title: "활발한 재활 프로그램",
      description: "체계적인 재활 프로그램으로 신체 기능 회복을 돕습니다.",
    },
    {
      icon: "🏠",
      title: "쾌적한 시설 환경",
      description: "깨끗하고 안전한 최신 시설에서 편안하게 생활하실 수 있습니다.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle}>
          우리 요양원의 특별함
          <br />
          <span className={styles.subtitle}>3대 핵심 가치</span>
        </h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{value.icon}</span>
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



