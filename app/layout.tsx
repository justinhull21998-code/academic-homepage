import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "王伟 | Wei Wang - Data Analyst",
  description: "北京交通大学统计学专业本科生，数据分析方向研究生在读，专注于数据挖掘、商业智能和机器学习。",
  keywords: ["数据分析", "统计学", "Data Analyst", "机器学习", "贝叶斯统计"],
  authors: [{ name: "Wei Wang" }],
  openGraph: {
    title: "王伟 | Wei Wang - Data Analyst",
    description: "数据分析方向研究生个人学术主页",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
