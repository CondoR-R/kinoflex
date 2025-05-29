import { mediaData } from "@/data/media.data";
import style from "./IMdbRating.module.scss";

const IMdbRating: React.FC = () => {
  return (
    <div className={style.rating}>
      <span className={style.imdb}>iMdb</span>
      <span className={style.value}>{mediaData.rating.imdb}/10</span>
    </div>
  );
};
export default IMdbRating;
