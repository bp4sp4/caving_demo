"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import styles from "./page.module.css";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function SchedulePage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;
    
    if (!apiKey) {
      console.error("카카오맵 API 키가 설정되지 않았습니다.");
      return;
    }

    // 이미 스크립트가 로드되어 있는지 확인
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        initMap();
      });
      return;
    }

    // 스크립트가 이미 추가되어 있는지 확인
    const existingScript = document.querySelector(
      `script[src*="dapi.kakao.com/v2/maps/sdk.js"]`
    ) as HTMLScriptElement;

    if (existingScript) {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          initMap();
        });
      } else {
        existingScript.addEventListener("load", () => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              initMap();
            });
          }
        });
      }
      return;
    }

    // 스크립트 로드 (autoload=false 사용)
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    
    script.onerror = (error) => {
      console.error("카카오맵 스크립트 로드 실패:", error);
      console.error("API 키:", apiKey ? `${apiKey.substring(0, 10)}...` : "없음");
      console.error("스크립트 URL:", script.src);
      console.error("해결 방법:");
      console.error("1. 카카오 개발자 콘솔(https://developers.kakao.com) 접속");
      console.error("2. 내 애플리케이션 → 앱 선택 → 플랫폼 설정");
      console.error("3. Web 플랫폼 추가: http://localhost:3000");
      console.error("4. 저장 후 몇 분 대기");
    };

    script.onload = () => {
      // autoload=false를 사용했으므로 kakao.maps.load()로 명시적으로 로드
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          initMap();
        });
      } else {
        console.error("카카오맵 객체를 찾을 수 없습니다.");
      }
    };

    // body에 추가
    document.body.appendChild(script);

    function initMap() {
      if (!mapRef.current) {
        console.error("맵 컨테이너를 찾을 수 없습니다.");
        return;
      }

      // kakao 객체 확인
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오맵 객체를 찾을 수 없습니다.");
        return;
      }

      try {
        // 서울시 도봉구 마들로 13길 61, B동 9층 906호 좌표
        const position = new window.kakao.maps.LatLng(37.6544, 127.0476);
        
        const options = {
          center: position,
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: position,
        });

        marker.setMap(map);

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:10px;font-size:14px;text-align:center;">B동 9층 906호</div>',
        });

        infowindow.open(map, marker);
      } catch (error) {
        console.error("카카오맵 초기화 오류:", error);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>교육원 오시는길</h1>
          <div className={styles.infoContainer}>
            <div className={styles.infoSection}>
              <h2 className={styles.infoTitle}>주소</h2>
              <p className={styles.infoText}>
                서울시 도봉구 마들로 13길 61(창동씨드큐브), B동 9층 906호
              </p>
            </div>

            <div className={styles.infoSection}>
              <h2 className={styles.infoTitle}>문의</h2>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>TEL</span>
                  <span className={styles.contactValue}>02-2135-9249</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <div ref={mapRef} className={styles.map}></div>
          </div>

          
        </section>
      </main>
    </div>
  );
}

