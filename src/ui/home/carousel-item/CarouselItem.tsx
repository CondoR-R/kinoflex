"use client";

import React, { useState } from "react";
import * as m from "motion/react-m";

import { ICard } from "@/types/media.types";
import { mediaData } from "@/data/media.data";
import { useCarouselStore } from "@/store/carousel.store";

import { getStyleRotation } from "./getGetStyleRotation";
import { getNextAngle } from "./getNextAngle";

import style from "./CarouselItem.module.scss";
import CardInfo from "../card-info/CardInfo";

interface Props {
  item: ICard;
  index: number;
}

const CarouselItem: React.FC<Props> = ({ item, index }) => {
  const {
    activeCardIndex,
    rotateAngle,
    radius,
    isHide,
    setActiveCardIndex,
    setRotateAngle,
    setRadius,
    setIsHide,
  } = useCarouselStore();

  const { rotate, x, y } = getStyleRotation(index, mediaData.length, radius);

  const isActive = activeCardIndex === index;

  // z-index относительно активной карточки
  const zIndex = isActive
    ? 10
    : activeCardIndex === index + 1 ||
      activeCardIndex === index - 1 ||
      (activeCardIndex === 9 && index === 0)
    ? 5
    : activeCardIndex === index + 2 ||
      activeCardIndex === index - 2 ||
      (activeCardIndex === 9 && index === 1)
    ? 1
    : 0;

  const initialAnimation = {
    scale: isHide ? 0 : isActive ? 1.05 : 1,
    zIndex,
    x,
    y,
    rotate,
  };

  const onClickBtn = () => {
    if (activeCardIndex == index) {
      setRadius(0);
      setIsHide(true);
      return;
    }

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
      <CardInfo index={index} item={item} />
    </m.button>
  );
};

export default CarouselItem;
