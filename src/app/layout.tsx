import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Providers from "./Providers";

import Header from "@/ui/header/Header";

import "@/sass/index.scss";

// шрифт страницы (подключается _globals.scss через переменную)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

// информация о сайте
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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
