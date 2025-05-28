import React from "react";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

import Menu from "@/ui/header/menu/Menu";
import GripIcon from "@/ui/header/grip-icon/GripIcon";

import style from "./Header.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <Link href={"/"} title="Перейти на главную">
          <GripIcon />
        </Link>
        {/* <Menu /> */}
      </div>

      <div className={style.right}>
        <Search />
        <Bell />
      </div>
    </header>
  );
};

export default Header;
