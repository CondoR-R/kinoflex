import React from "react";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

import Menu from "../../ui/menu/Menu";

import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="4" cy="4" r="2" fill="currentColor" />
          <circle cx="4" cy="16" r="2" fill="currentColor" />
          <circle cx="16" cy="4" r="2" fill="currentColor" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
        <Menu />
      </div>

      <div className={style.right}>
        <Search />
        <Bell />
        <Image
          className={style.avatar}
          height={50}
          width={50}
          src="/avatar.jpg"
          alt="Фото профиля"
        />
      </div>
    </header>
  );
};

export default Header;
