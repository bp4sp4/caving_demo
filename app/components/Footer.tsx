"use client";

import styles from "./Footer.module.css";
import { useSiteConfig } from "../contexts/SiteConfigContext";

interface FooterProps {
  logoPath?: string;
  logoText?: string;
  contactInfo?: {
    phone: string;
    address: string;
    hours: string;
  };
  copyrightText?: string;
}

export default function Footer({ 
  logoPath,
  logoText,
  contactInfo,
  copyrightText,
}: FooterProps) {
  const config = useSiteConfig();
  const finalLogoPath = logoPath ?? config.logoPath;
  const finalLogoText = logoText ?? config.logoText;
  const finalContactInfo = contactInfo ?? config.contactInfo;
  const finalCopyrightText = copyrightText ?? config.copyrightText;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          {finalLogoPath ? (
            <img
              src={finalLogoPath}
              alt="한평생요양보호사 교육원"
              width={200}
              height={40}
              className={styles.logo}
            />
          ) : finalLogoText ? (
            <span className={styles.logoText}>{finalLogoText}</span>
          ) : (
            <img
              src="/logo.png"
              alt="한평생요양보호사 교육원"
              width={200}
              height={40}
              className={styles.logo}
            />
          )}
        </div>
        <div className={styles.info}>
          <span>{finalContactInfo.address}</span>
          <span>Tel. {finalContactInfo.phone}</span>
          <span>{finalContactInfo.hours}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.meta}>{finalCopyrightText}</div>
      </div>
    </footer>
  );
}

