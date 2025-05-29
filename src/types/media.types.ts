// тип для карточек на Home
export interface ICard {
  id: number;

  name: string;
  type: "movie" | "tv-series" | "cartoon" | "anime" | "animated-series";
  year: number;

  rating: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  };

  poster: {
    url: string | null;
    previewUrl: string | null;
  };

  genres: {
    name: string;
  }[];
}

// тип для данных страницы media
export interface IMediaItem {
  id: number;

  name: string;
  alternativeName: string | null;
  enName: string | null;

  type: "movie" | "tv-series" | "cartoon" | "anime" | "animated-series";
  typeNumber: 1 | 2 | 3 | 4 | 5;

  year: number;

  description: string;
  shortDescription: string;

  status:
    | "announced"
    | "completed"
    | "filming"
    | "post-production"
    | "pre-production"
    | null;

  rating: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  };
  votes: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
  };

  movieLength: number | null;
  totalSeriesLength: number | null;
  seriesLength: number | null;

  ratingMpaa: string | null;
  ageRating: number;

  poster: {
    url: string | null;
    previewUrl?: string | null;
  };
  backdrop: {
    url: string | null;
    previewUrl?: string | null;
  };
  logo?: {
    url: string | null;
    previewUrl?: string | null;
  };

  genres: {
    name: string;
  }[];
  countries: { name: string }[];

  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
}
