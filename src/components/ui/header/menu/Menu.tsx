"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { clsx } from "clsx";

import { menuData } from "@/data/menu.data";

import style from "./Menu.module.scss";

const Menu: React.FC = () => {
  const pathname = usePathname();

  const active = style.active;

  return (
    <nav>
      <ul className={style.list}>
        {menuData.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              title={`Перейти на страницу ${item.name}`}
              className={clsx(`${style.link}`, {
                [active]: item.url === pathname,
              })}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
