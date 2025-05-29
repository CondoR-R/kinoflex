"use client";

import React from "react";
import * as m from "motion/react-m";

import { IMediaItem } from "@/types/media.types";
import { mediaData } from "@/data/media.data";

import { getStyleRotation } from "./getGetStyleRotation";

import style from "./CarouselItem.module.scss";
import { useCarouselStore } from "@/store/carousel.store";
import { getNextAngle } from "./getNextAngle";
import { Star } from "lucide-react";

interface Props {
  item: IMediaItem;
  index: number;
}

const CarouselItem: React.FC<Props> = ({ item, index }) => {
  const { activeCardIndex, rotateAngle, setActiveCardIndex, setRotateAngle } =
    useCarouselStore();
  const { rotate, x, y } = getStyleRotation(index, mediaData.length);

  const isActive = activeCardIndex === index;

  // z-index относительно активной карточки
  const zIndex = isActive
    ? 10
    : activeCardIndex === index + 1 ||
      activeCardIndex === index - 1 ||
      (activeCardIndex === 9 && index === 0)
    ? 5
    : activeCardIndex === index + 2 || activeCardIndex === index - 2
    ? 1
    : 0;

  const initialAnimation = {
    scale: isActive ? 1.05 : 1,
    zIndex,
    x,
    y,
    rotate,
  };

  const onClickBtn = () => {
    setActiveCardIndex(index);

    const nextAngle = getNextAngle(index, activeCardIndex);

    setRotateAngle(rotateAngle + nextAngle);
  };

  return (
    <m.button
      onClick={onClickBtn}
      className={style.item}
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={initialAnimation}
      transition={{ type: "keyframes", stiffnes: 230, damping: 32 }}
    >
      <img
        className={style.poster}
        style={{
          filter: isActive ? "grayscale(0)" : "grayscale(100%)",
        }}
        width={300}
        height={450}
        src={item.poster}
        alt={item.title}
        draggable="false"
      />
      <div className={style.top}>
        <p
          className={style.rating}
          style={{ scale: activeCardIndex === index ? 1 : 0 }}
        >
          <Star className={style.star} />
          <span className={style.text}>10</span>
        </p>
      </div>
    </m.button>
  );
};

export default CarouselItem;
