"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import style from "./ToggleTheme.module.scss";

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={style.btn}>
        <div className={style.placeholder} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={style.btn}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className={style.icon} size={20} />
      ) : (
        <Moon className={style.icon} size={20} />
      )}
    </button>
  );
}

export default ToggleTheme;
