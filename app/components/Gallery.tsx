import Image from "next/image";
import Link from "next/link";
import styles from "./Gallery.module.css";

interface GalleryItem {
  image: string;
  alt: string;
  title?: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      image: "/main_img_bg.jpg",
      alt: "시설 외관",
      title: "시설 외관",
    },
    {
      image: "/main_img_bg.jpg",
      alt: "휴게 공간",
      title: "휴게 공간",
    },
    {
      image: "/main_img_bg.jpg",
      alt: "재활 프로그램",
      title: "재활 프로그램",
    },
    {
      image: "/main_img_bg.jpg",
      alt: "식사 시간",
      title: "식사 시간",
    },
    {
      image: "/main_img_bg.jpg",
      alt: "야외 활동",
      title: "야외 활동",
    },
    {
      image: "/main_img_bg.jpg",
      alt: "의료 상담",
      title: "의료 상담",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle}>갤러리</h2>
        <p className={styles.sectionSubtitle}>
          요양원의 일상과 활동을 사진으로 만나보세요
        </p>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <Link
              key={index}
              href={`/gallery/${index}`}
              className={styles.galleryItem}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  {item.title && (
                    <span className={styles.imageTitle}>{item.title}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.ctaBox}>
          <Link href="/gallery" className={styles.moreButton}>
            전체 갤러리 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}



