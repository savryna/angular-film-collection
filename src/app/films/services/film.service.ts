import { Injectable, signal } from '@angular/core';

import filmsData from '../mocks/films.json';
import type { FilmData } from '../models/films.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly _films = signal<FilmData[]>(filmsData);
  private readonly _currentFilm = signal<FilmData | null>(null);
  public readonly films = this._films.asReadonly();
  public readonly currentFilm = this._currentFilm.asReadonly();

  public getFilmById(id: number): FilmData | undefined {
    return this._films().find((film) => film.id === id);
  }

  public setCurrentFilm(film: FilmData | null): void {
    this._currentFilm.set(film);
  }

  public toggleFavoriteStatus(id: number): void {
    this._films.update((films) => {
      return films.map((film) => {
        if (film.id === id) {
          return { ...film, isFavorite: !film.isFavorite };
        } else {
          return film;
        }
      });
    });
  }
}
