"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <img
            src="/logo.png"
            alt="한평생요양보호사 교육원"
            width={200}
            height={40}
            className={styles.logo}
          />
          {/* <span className={styles.brandText}>한평생요양보호사교육원</span> */}
        </div>
        <div className={styles.info}>
          <span>서울시 도봉구 마들로 13길 61, B동 9층 906호</span>
          <span>Tel. 02-2135-9249</span>
          <span>평일 09:00 - 18:00</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.meta}>© 2025 한평생요양보호사교육원. All rights reserved.</div>
      </div>
    </footer>
  );
}

