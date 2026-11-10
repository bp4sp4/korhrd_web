import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 같은 와이파이의 폰에서 개발 서버 확인용 (dev 전용, 배포에는 영향 없음)
  allowedDevOrigins: ["192.168.45.244"],
};

export default nextConfig;
