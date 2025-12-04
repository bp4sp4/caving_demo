import Link from "next/link";
import styles from "./NewsSection.module.css";

interface NewsItem {
  title: string;
  date: string;
  category?: string;
  link?: string;
}

export default function NewsSection() {
  const newsItems: NewsItem[] = [
    {
      title: "[25.12.22 개강반] 대구를 대표하는 요양보호사교육원",
      date: "2025-11-20",
      category: "개강안내",
    },
    {
      title: "[25.12.1 자격증소지자 개강반] 대구를 대표하는 요양보호사교육원",
      date: "2025-11-14",
      category: "개강안내",
    },
    {
      title: "[25.11.20 개강반] 대구를 대표하는 요양보호사교육원",
      date: "2025-10-22",
      category: "개강안내",
    },
    {
      title: "2025년 연말 행사 안내",
      date: "2025-10-15",
      category: "행사안내",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>공지사항 및 새 소식</h2>
          <Link href="/notices" className={styles.moreLink}>
            전체보기 →
          </Link>
        </div>
        <div className={styles.newsList}>
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.link || "#"}
              className={styles.newsItem}
            >
              <div className={styles.newsContent}>
                {item.category && (
                  <span className={styles.category}>{item.category}</span>
                )}
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <span className={styles.newsDate}>{item.date}</span>
              </div>
              <div className={styles.newsArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



