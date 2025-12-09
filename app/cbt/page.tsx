"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseInfo from "../components/CourseInfo";
import styles from "./page.module.css";

export default function CoursePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <CourseInfo />
      </main>
      <Footer />
    </div>
  );
}

