import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import "./globals.css";

const harmony = localFont({
  src: [
    { path: "../fonts/HarmonyOS-Sans-SC-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/HarmonyOS-Sans-SC-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/HarmonyOS-Sans-SC-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-harmony",
  display: "swap",
});

const lineSeed = localFont({
  src: [
    { path: "../fonts/LINESeedTW-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/LINESeedTW-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-line-seed",
  display: "swap",
});

const douyin = localFont({
  src: "../fonts/DouyinSansBold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-douyin",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jomolab｜释放 AI 创造力，兑现商业想象力",
    template: "%s｜Jomolab",
  },
  description:
    "Jomolab 连接 AIGC 设计、AI 工具、OPC 人才与学习实践，让创意进入真实商业。",
  keywords: ["Jomolab", "AIGC", "AI OPC", "AI 设计", "OPC 学习中心"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Jomolab",
    title: "Jomolab｜释放 AI 创造力，兑现商业想象力",
    description: "连接 AI 创意、工具、人才与商业机会。",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body className={`${harmony.variable} ${lineSeed.variable} ${douyin.variable}`}>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <Header />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
