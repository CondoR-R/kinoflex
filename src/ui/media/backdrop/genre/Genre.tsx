import style from "./Genre.module.scss";

interface Props {
  genre: string;
}

const Genre: React.FC<Props> = ({ genre }) => {
  return <span className={style.genre}>{genre}</span>;
};

export default Genre;
