import Filters from "@/ui/home/filters/Filters";

import style from "./page.module.scss";
import Carousel from "@/ui/home/carousel/Carousel";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.header}>
        <h1 className={style.title}>Неограниченное колличество контента</h1>
        {/* <Filters /> */}
      </div>
      <Carousel />
    </div>
  );
}
