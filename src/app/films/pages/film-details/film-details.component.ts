import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES_LIST } from '../../../shared/constans';
import { FavoriteBtnComponent } from '../../components/favorite-btn/favorite-btn.component';
import { DurationPipe } from '../../pipes/duration-pipe';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe, FavoriteBtnComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent {
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly filmService = inject(FilmService);
  public filmId = Number(this.activateRoute.snapshot.params['id']);
  public film = computed(() => {
    const filmById = this.filmService.getFilmById(this.filmId)!;
    if (filmById === undefined) {
      void this.router.navigate([ROUTES_LIST.notFound]);
    }
    return filmById;
  });

  constructor() {
    effect(() => {
      this.filmService.setCurrentFilm(this.film() ?? null);
    });
  }

  public toggleStatus(id: number): void {
    this.filmService.toggleFavoriteStatus(id);
  }

  public goBack(): void {
    this.location.back();
  }
}
