import { TFilter } from "./filters.types";

export interface IMediaItem {
  id: number;

  title: string;
  rating: number;

  poster: string;
  backdrop: string;

  type: TFilter;
  year: number;

  seasons?: ISeason[];

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
