"use client";

import React from "react";
import * as m from "motion/react-m";
import Image from "next/image";

import { IMediaItem } from "@/types/media.types";
import { mediaData } from "@/data/media.data";

import { useGetStyleRotation } from "./useGetStyleRotation";

import style from "./CarouselItem.module.scss";
import { useCarouselStore } from "@/store/carousel.store";

interface Props {
  item: IMediaItem;
  index: number;
}

const CarouselItem: React.FC<Props> = ({ item, index }) => {
  const { activeCardIndex, setActiveCardIndex } = useCarouselStore();
  const { rotate, translateY, translateX } = useGetStyleRotation(
    index,
    mediaData.length
  );

  const isActive = activeCardIndex === index;

  const zIndex = isActive
    ? 10
    : activeCardIndex === index + 1 || activeCardIndex === index - 1
    ? 5
    : activeCardIndex === index + 2 || activeCardIndex === index - 3
    ? 1
    : 0;

  const initialAnimation = {
    scale: isActive ? 1 : 1,
    zIndex,
    y: translateY,
    x: translateX,
    rotate,
  };

  return (
    <m.button
      onClick={() => setActiveCardIndex(index)}
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
    </m.button>
  );
};

export default CarouselItem;
