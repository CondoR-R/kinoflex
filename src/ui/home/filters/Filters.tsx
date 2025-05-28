"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { motion } from "motion/react";

import { filtersData } from "@/data/filters.data";
import { useFilterStore } from "@/store/filters.store";

import style from "./Filters.module.scss";

const Filters: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useFilterStore();

  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const getActiveButtonStyles = () => {
      const index = filtersData.indexOf(currentFilter);
      const button = buttonsRef.current[index];

      if (!button) return { width: 0, left: 0 };

      return {
        width: button.offsetWidth,
        left: button.offsetLeft,
      };
    };

    const { width, left } = getActiveButtonStyles();

    setWidth(width);
    setLeft(left);
  }, [currentFilter]);

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {filtersData.map((filter, index) => (
          <li key={index}>
            <motion.button
              ref={(el) => {
                buttonsRef.current[index] = el;
              }}
              onClick={() => setCurrentFilter(filter)}
              className={clsx(style.btn, {
                [style.activeBtn]: filter === currentFilter,
              })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {filter}
            </motion.button>
          </li>
        ))}
      </ul>

      {/* индикатор выбранного фильтра */}
      <motion.div
        layout
        className={style.active}
        style={{
          left: left + 1,
          width,
          borderRadius: "0.5rem",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
    </div>
  );
};

export default Filters;
