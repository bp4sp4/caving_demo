import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
        <div className={styles.wrap}>
          <div className={styles.toolBox}>
            <Link href="/login" className={styles.toolLink}>
              로그인
            </Link>
            <Link href="/signup" className={styles.toolLink}>
              회원가입
            </Link>
          </div>
      <div id="Top" className={styles.top}>
        <div className={styles.wrap}>
          <div className={styles.logoBox}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="섬기미요양보호사교육원"
                width={300}
                height={60}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>
        
        </div>
      </div>
      </div>
      <div id="Top_menu" className={styles.topMenu}>
        <div className={styles.wrap}>
          <nav className={styles.nav} aria-label="주요 메뉴">
            <Link href="/about" className={styles.navLink}>
              교육원소개
            </Link>
            <Link href="/schedule" className={styles.navLink}>
              개강일정
            </Link>
            <Link href="/learning" className={styles.navLink}>
              학습지원센터
            </Link>
            <Link href="/cbt" className={styles.navLink}>
              CBT모의고사
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

