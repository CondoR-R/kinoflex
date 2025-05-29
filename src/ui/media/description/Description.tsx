import { mediaData } from "@/data/media.data";

import style from "./Description.module.scss";

const Description: React.FC = () => {
  return (
    <div className={style.description}>
      <h1 className={style.title}>
        {mediaData.name}{" "}
        {mediaData.alternativeName && <>| {mediaData.alternativeName}</>}
      </h1>
      <p className={style.text}>{mediaData.shortDescription}</p>
      <p className={style.text}>{mediaData.description}</p>
    </div>
  );
};

export default Description;
