import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Providers from "./Providers";

import MainWrapper from "@/components/main-wrapper/MainWrapper";

import "@/sass/index.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Kinoflex",
  description: "Онлайн кинотеатр по типу Netflix, очень много анимаций",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable}`}>
        <Providers>
          <MainWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}
