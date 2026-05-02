import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES_LIST } from '../../../shared/constans';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent implements OnInit {
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);
  public filmId = Number(this.activateRoute.snapshot.params['id']);
  public film = this.filmService.getFilmById(this.filmId);

  public ngOnInit(): void {
    if (this.film === undefined) {
      void this.router.navigate([ROUTES_LIST.notFound]);
    }
  }
}
