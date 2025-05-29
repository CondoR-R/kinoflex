import { mediaData } from "@/data/media.data";

import Name from "./name/Name";

import style from "./Backdrop.module.scss";
import Genre from "./genre/Genre";
import IMdbRating from "./iMdb-rating/IMdbRating";

const Backdrop = () => {
  return (
    <>
      <div className={style.backdrop}>
        <img
          className={style.img}
          src={
            mediaData.backdrop.url
              ? mediaData.backdrop.url
              : mediaData.backdrop.previewUrl
              ? mediaData.backdrop.previewUrl
              : ""
          }
          alt={mediaData.name}
          width={1000}
          height={1000}
        />
        <div className={style.wrapper}>
          <div className={style.info}>
            <Name />
            <div className={style.genres}>
              {mediaData.genres.map(({ name }, index) => (
                <Genre key={index} genre={name} />
              ))}
            </div>
            <IMdbRating />
          </div>
        </div>
      </div>
    </>
  );
};

export default Backdrop;
