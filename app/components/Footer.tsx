"use client";

import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  copyrightText?: string;
}

export default function Footer({
  copyrightText = "© 2024 요양원. All rights reserved.",
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}



