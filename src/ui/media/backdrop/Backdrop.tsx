import { mediaData } from "@/data/media.data";

import Name from "./name/Name";

import style from "./Backdrop.module.scss";
import Genre from "./genre/Genre";
import IMdbRating from "./iMdb-rating/IMdbRating";

const Backdrop: React.FC = () => {
  return (
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
        alt="123"
        width={100}
        height={100}
      />
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
  );
};

export default Backdrop;
