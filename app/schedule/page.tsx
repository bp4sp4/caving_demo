"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSiteConfig } from "../config/siteConfig";
import styles from "./page.module.css";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function SchedulePage() {
  const config = useSiteConfig();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapLocation = config.mapLocation || {
    address: config.contactInfo.address,
    latitude: 37.6544,
    longitude: 127.0476,
    detail: "B동 9층 906호",
  };

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

    // 스크립트 로드 (autoload=false 사용, services 라이브러리 포함)
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
    
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
        const fallbackPosition = new window.kakao.maps.LatLng(
          mapLocation.latitude,
          mapLocation.longitude
        );

        const isMobile = window.innerWidth <= 768;

        const renderMap = (coords: any) => {
          const options = {
            center: coords,
            level: isMobile ? 2 : 3, // 모바일에서는 더 확대
          };

          const map = new window.kakao.maps.Map(mapRef.current, options);

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position: coords,
            map: map,
          });

          // 인포윈도우 생성
          const infowindowContent = mapLocation.detail
            ? `<div style="padding:10px;font-size:14px;text-align:center;">${mapLocation.detail}</div>`
            : `<div style="padding:10px;font-size:14px;text-align:center;">${mapLocation.address}</div>`;
          
          const infowindow = new window.kakao.maps.InfoWindow({
            content: infowindowContent,
          });

          // 모바일에서는 인포윈도우를 자동으로 열지 않고, 마커 클릭 시 열도록
          if (!isMobile) {
            infowindow.open(map, marker);
          }

          // 마커 클릭 이벤트 추가
          window.kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });
        };

        // services 라이브러리가 없을 때 대비
        if (!window.kakao.maps.services || !window.kakao.maps.services.Geocoder) {
          console.warn("services 라이브러리를 찾을 수 없어 fallback 좌표를 사용합니다.");
          renderMap(fallbackPosition);
          return;
        }

        // 주소로 좌표 검색 (Geocoder 사용)
        const geocoder = new window.kakao.maps.services.Geocoder();
        
        geocoder.addressSearch(mapLocation.address, function(result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색 결과의 좌표 사용
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            renderMap(coords);
          } else {
            // 주소 검색 실패 시 siteConfig의 좌표 사용
            console.warn("주소 검색 실패, 설정된 좌표 사용:", status);
            renderMap(fallbackPosition);
          }
        });
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
              <h2 className={styles.infoTitle}>찾아오시는길</h2>
              <p className={styles.infoText}>
                {config.contactInfo.address}
              </p>
            </div>

            <div className={styles.infoSection}>
              <h2 className={styles.infoTitle}>문의</h2>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>TEL</span>
                  <span className={styles.contactValue}>{config.contactInfo.phone}</span>
                </div>
                {config.contactInfo.email && (
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>EMAIL</span>
                    <span className={styles.contactValue}>{config.contactInfo.email}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <div ref={mapRef} className={styles.map}></div>
          </div>

          
        </section>
      </main>
      <Footer />
    </div>
  );
}

