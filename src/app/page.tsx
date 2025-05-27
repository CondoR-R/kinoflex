import Filters from "@/components/ui/home/filters/Filters";

import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.home}>
      <h1 className={style.title}>
        Откройте для Себя неограниченное колличество контента
      </h1>
      <Filters />
    </div>
  );
}
