export interface IMenuItem {
  name: string;
  url: string;
}

export const menuData: IMenuItem[] = [
  { name: "Главная", url: "/" },
  { name: "Фильмы", url: "/movies" },
  { name: "ТВ шоу", url: "/tv-shows" },
  { name: "Буду смотреть", url: "/watchlist" },
];
