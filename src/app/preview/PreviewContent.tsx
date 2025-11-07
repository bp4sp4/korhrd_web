"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Herosection from "@/components/Herosection/index";

// 비밀 키 - 원하는 값으로 변경하세요
const SECRET_KEY = "secret2025!!";

export default function PreviewContent() {
  const searchParams = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const key = searchParams.get("key");
    if (key === SECRET_KEY) {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        fontSize: "18px",
        color: "#666"
      }}>
        로딩 중...
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div style={{ 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        fontSize: "18px",
        color: "#666",
        gap: "10px"
      }}>
        <div>접근 권한이 없습니다.</div>
        <div style={{ fontSize: "14px", color: "#999" }}>
          올바른 비밀 키를 URL에 포함해주세요. (예: /preview?key=secret2025!!)
        </div>
      </div>
    );
  }

  return (
    <div>
      <Herosection />
    </div>
  );
}

