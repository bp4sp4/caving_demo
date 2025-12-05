"use client";

import Header from "../components/Header";
import CaregiverInfo from "../components/CaregiverInfo";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <CaregiverInfo />
      </main>
    </div>
  );
}

