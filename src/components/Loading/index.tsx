"use client";

import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 페이지 로딩이 완료되면 로딩 화면을 숨김
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1초 후 로딩 완료
    };

    // 페이지가 이미 로드된 경우
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // 페이지 로딩 완료 이벤트 리스너
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContent}>
        <img
          src="/loading.gif"
          alt="Loading..."
          className={styles.loadingImage}
        />
        <p className={styles.loadingText}>로딩 중...</p>
      </div>
    </div>
  );
}
