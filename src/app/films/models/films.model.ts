export type Films = FilmData[];
export type FilmData = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  duration: number;
  description: string;
  posterUrl: string;
  isFavorite: boolean;
};
