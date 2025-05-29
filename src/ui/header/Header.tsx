import React from "react";
import { Bell, Search } from "lucide-react";
import Link from "next/link";

import Menu from "@/ui/header/menu/Menu";
import GripIcon from "@/ui/header/grip-icon/GripIcon";

import ToggleTheme from "./toggle-theme/ToggleTheme";

import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <Link href={"/"} title="Перейти на главную">
          <GripIcon />
        </Link>
        <Menu />
      </div>

      <div className={style.right}>
        <Search />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
