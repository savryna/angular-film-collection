import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FilmService } from '../../services/film.service';
import { FilmCardComponent } from '../film-card/film-card.component';

@Component({
  selector: 'app-film-list',
  imports: [FilmCardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent {
  private readonly filmService = inject(FilmService);

  public readonly films = this.filmService.films();
}
