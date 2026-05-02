import { Location } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FavoriteBtnComponent } from '../../../shared/button/favorite-btn/favorite-btn.component';
import { ROUTES_LIST } from '../../../shared/constans';
import { DurationPipe } from '../../pipes/duration-pipe';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe, FavoriteBtnComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent implements OnInit {
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly filmService = inject(FilmService);
  public filmId = Number(this.activateRoute.snapshot.params['id']);
  public film = computed(() => this.filmService.films().find((f) => f.id === this.filmId));

  public ngOnInit(): void {
    if (this.film === undefined) {
      void this.router.navigate([ROUTES_LIST.notFound]);
    }
  }

  public toggleStatus(id: number | undefined): void {
    if (id !== undefined) {
      this.filmService.toggleFavoriteStatus(id);
    }
  }

  public goBack(): void {
    this.location.back();
  }
}
