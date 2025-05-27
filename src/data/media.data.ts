import { TFilter } from "./filters.data";

export interface IMediaItem {
  id: number;
  slug: string;

  title: string;
  rating: number;

  poster: string;
  backdrop: string;

  type: TFilter;
  year: string;

  seasons?: ISeason[];

  genres: string[];
}

export interface ISeason {
  id: number;
  slug: string;

  title: string;
  eposodes: IVideo[];
}

export interface IVideo {
  id: number;
  slug: string;

  title: string;
  poster: string;

  duration: number;
  videoUrl: string;
}
