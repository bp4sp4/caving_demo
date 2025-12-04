import styles from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  author: string;
  relation: string;
  rating?: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "어머니가 입소하신 후로 안심이 됩니다. 전문적인 케어와 따뜻한 마음으로 돌봐주셔서 정말 감사합니다.",
      author: "김○○",
      relation: "보호자",
      rating: 5,
    },
    {
      quote:
        "요양원 생활이 생각보다 훨씬 활기차고 즐겁습니다. 재활 프로그램도 체계적이고 직원분들도 모두 친절하세요.",
      author: "이○○",
      relation: "입소자",
      rating: 5,
    },
    {
      quote:
        "식단이 정말 맛있고 영양도 잘 고려되어 있습니다. 어머니 건강이 많이 좋아지셨습니다.",
      author: "박○○",
      relation: "보호자",
      rating: 5,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle}>이용자 후기</h2>
        <p className={styles.sectionSubtitle}>
          실제 이용자들이 전하는 진솔한 이야기
        </p>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorRelation}>
                    {testimonial.relation}
                  </span>
                </div>
                {testimonial.rating && (
                  <div className={styles.rating}>
                    {"★".repeat(testimonial.rating)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

