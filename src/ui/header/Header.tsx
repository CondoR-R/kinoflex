import React from "react";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

import Menu from "@/ui/header/menu/Menu";
import GripIcon from "@/ui/header/grip-icon/GripIcon";

import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <GripIcon />
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
