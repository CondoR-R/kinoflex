"use client";

import React from "react";
import clsx from "clsx";

import { filtersData } from "@/data/filters.data";
import { useFilterStore } from "@/store/store";

import style from "./Filters.module.scss";

const Filters: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useFilterStore();

  const activeBtn = style.activeBtn;
  const activeStyle = {};

  return (
    <div>
      <div className={style.active} style={activeStyle}></div>
      <ul className={style.list}>
        {filtersData.map((filter, index) => (
          <li key={index}>
            <button
              onClick={() => setCurrentFilter(filter)}
              className={clsx(style.btn, {
                [activeBtn]: filter === currentFilter,
              })}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
