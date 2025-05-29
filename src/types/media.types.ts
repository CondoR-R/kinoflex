import { TFilter } from "./filters.types";

// типы для карточек на Home
// настроить под API!!!!
export interface ICard {
  id: number;

  title: string;
  rating: number;

  poster: string;

  type: TFilter;
  year: number;

  genres: { name: string }[];
}

export interface ISeason {
  id: number;

  title: string;
  eposodes: IVideo[];
}

export interface IVideo {
  id: number;

  title: string;
  poster: string;

  duration: number;
  videoUrl: string;
}
