import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent {
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly filmService = inject(FilmService);
  public filmId = Number(this.activateRoute.snapshot.params['id']);
  public film = this.filmService.getFilmById(this.filmId);
}
