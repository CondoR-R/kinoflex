import React from "react";
import { Dot, MonitorPlay, Star } from "lucide-react";

import { ICard } from "@/types/media.types";
import { useCarouselStore } from "@/store/carousel.store";

import style from "./CardInfo.module.scss";

interface Props {
  index: number;
  item: ICard;
}

const CardInfo: React.FC<Props> = ({ index, item }) => {
  const { activeCardIndex } = useCarouselStore();

  return (
    <>
      <div className={style.top}>
        <p
          className={style.rating}
          style={{ scale: activeCardIndex === index ? 1 : 0 }}
        >
          <Star className={style.star} />
          <span className={style.text}>{item.rating.imdb}</span>
        </p>
        <p
          className={style.type}
          style={{ scale: activeCardIndex === index ? 1 : 0 }}
        >
          <MonitorPlay className={style.icon} />
          <span className={style.text}>{item.type}</span>
        </p>
      </div>
      <div
        className={style.bottom}
        style={{ scale: activeCardIndex === index ? 1 : 0 }}
      >
        <p>{item.year}</p>
        <Dot />
        {item.genres.map((gener, index) => {
          if (index > 1) return;
          return (
            <React.Fragment key={index}>
              <span key={index}>{gener.name}</span>
              {index !== 1 && <Dot />}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default CardInfo;
