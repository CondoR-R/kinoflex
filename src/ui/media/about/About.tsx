import React from "react";
import style from "./About.module.scss";
import { mediaData } from "@/data/media.data";

const About: React.FC = () => {
  const listData: { text: string; data: string }[] = [
    { text: "Год производства", data: `${mediaData.year}` },
    {
      text: "Страна производства",
      data: mediaData.countries.map(({ name }) => name).join(", "),
    },
    {
      text: "Жанры",
      data: mediaData.genres.map(({ name }) => name).join(", "),
    },
    {
      text: "Оценка iMbd",
      data: `${mediaData.rating.imdb}/10`,
    },
    {
      text: "Оценка Кинопоиска",
      data: `${mediaData.rating.kp}/10`,
    },
    {
      text: "Оценка кинокритиков",
      data: `${mediaData.rating.filmCritics}/10`,
    },
    {
      text: "Оценка российских кинокритиков",
      data: `${mediaData.rating.russianFilmCritics}/100`,
    },
    {
      text: "Возрастной рейтинг",
      data: `${mediaData.ageRating}+`,
    },
    {
      text: "Рейтинг Mpaa",
      data: `${mediaData.ratingMpaa}`,
    },
    {
      text: "Продолжительность",
      data: `${mediaData.movieLength} минут`,
    },
  ];

  return (
    <div className={style.about}>
      <h2 className={style.title}>О фильме</h2>
      <div className={style.list}>
        {listData.map(({ text, data }, i) => (
          <React.Fragment key={i}>
            <span key={i} className={style.text}>
              {text}:
            </span>
            <span className={style.text}>{data}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
