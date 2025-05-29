import { mediaData } from "@/data/media.data";

import style from "./Name.module.scss";

const Name: React.FC = () => {
  return (
    <div className={style.name}>
      {mediaData.logo?.url ? (
        <img
          className={style.logo}
          src={mediaData.logo.url}
          alt={mediaData.name}
          width={200}
          height={50}
        />
      ) : (
        <span className={style.span}>{mediaData.name}</span>
      )}
    </div>
  );
};

export default Name;
