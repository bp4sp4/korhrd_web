"use client";

import { Suspense } from "react";
import PreviewContent from "./PreviewContent";

export default function PreviewPage() {
  return (
    <Suspense fallback={
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
    }>
      <PreviewContent />
    </Suspense>
  );
}
