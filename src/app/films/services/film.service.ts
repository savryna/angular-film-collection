import { computed, Injectable, signal } from '@angular/core';

import filmsData from '../mocks/films.json';
import type { FilmData } from '../models/films.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly filmsSignal = signal<FilmData[]>(filmsData);
  private readonly currentFilmSignal = signal<FilmData | null>(null);
  public readonly films = this.filmsSignal.asReadonly();
  public readonly favoriteFilms = computed(() => this.filmsSignal().filter((film) => film.isFavorite));
  public readonly currentFilm = this.currentFilmSignal.asReadonly();

  public getFilmById(id: number): FilmData | undefined {
    const film = this.filmsSignal().find((film) => film.id === id);
    if (film !== undefined) {
      this.currentFilmSignal.set(film);
    } else {
      this.currentFilmSignal.set(null);
    }
    return film;
  }

  public toggleFavoriteStatus(id: number): void {
    this.filmsSignal.update((films) => {
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
