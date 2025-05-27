import React from "react";
import * as m from "motion/react-m";
import Image from "next/image";

import { IMediaItem } from "@/data/media.data";

import { useGetStyleRotation } from "./useGetStyleRotation";

import style from "./CarouselItem.module.scss";

interface Props {
  item: IMediaItem;
  index: number;
  arrayLength: number;
}

const CarouselItem: React.FC<Props> = ({ item, index, arrayLength }) => {
  const { rotate, translateY } = useGetStyleRotation(index, arrayLength);

  const initialAnimation = {
    scale: 1,
    zIndex: 0,
    y: translateY,
    rotate,
  };

  return (
    <m.button
      className={style.item}
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={initialAnimation}
      transition={{ type: "keyframes", stiffnes: 230, damping: 32 }}
    >
      <Image
        width={315}
        height={473}
        src={item.poster}
        alt={item.title}
        draggable="false"
      />
    </m.button>
  );
};

export default CarouselItem;
