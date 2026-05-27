import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub Actions 빌드 환경(CI=true)일 때는 /lenormand-studyboard/를,
// 로컬/마누스 샌드박스 미리보기 환경일 때는 루트(/)를 base 경로로 사용하도록 분기 처리합니다.
export default defineConfig({
  plugins: [react()],
  base: process.env.CI ? "/lenormand-studyboard/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  root: path.resolve(__dirname, "./client"),
  server: {
    // 마누스 샌드박스 프록시 주소에서의 접속을 허용하기 위해 allowedHosts 설정을 추가합니다.
    allowedHosts: "all",
  },
  build: {
    outDir: path.resolve(__dirname, "./dist/public"),
    emptyOutDir: true,
  },
});
