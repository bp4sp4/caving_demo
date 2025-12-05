"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          <button
            className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <span className={styles.closeIcon}>×</span>
            ) : (
              <>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
              </>
            )}
          </button>
        </div>
      </div>
      </div>
      <div id="Top_menu" className={`${styles.topMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.wrap}>
          <nav className={styles.nav} aria-label="주요 메뉴">
            <Link href="/about" className={styles.navLink} onClick={closeMenu}>
              교육원소개
            </Link>
            <Link href="/schedule" className={styles.navLink} onClick={closeMenu}>
              오시는길
            </Link>
            <Link href="/Caregiver" className={styles.navLink} onClick={closeMenu}>
              요양보호사
            </Link>
            <Link href="/cbt" className={styles.navLink} onClick={closeMenu}>
              교육과정
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

