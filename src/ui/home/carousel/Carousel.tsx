"use client";

import React from "react";
import * as m from "motion/react-m";

import { mediaData } from "@/data/media.data";
import { useCarouselStore } from "@/store/carousel.store";

import CarouselItem from "../carousel-item/CarouselItem";

import style from "./Carousel.module.scss";

const Carousel: React.FC = () => {
  const { rotateAngle } = useCarouselStore();

  const initialAnimation = {
    rotate: rotateAngle,
  };

  return (
    <div className={style.wrapper}>
      <m.div
        className={style.carousel}
        initial={{ rotate: 0 }}
        animate={initialAnimation}
        transition={{ type: "keyframes", stiffnes: 230, damping: 32 }}
      >
        {mediaData.map((media, index) => (
          <CarouselItem key={media.id} item={media} index={index} />
        ))}
      </m.div>
    </div>
  );
};

export default Carousel;
