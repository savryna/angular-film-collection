import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';

import type { FilmData } from '../../models/films.model';
import { FilmService } from '../../services/film.service';
import { FavoriteBtnComponent } from '../favorite-btn/favorite-btn.component';

@Component({
  selector: 'app-film-card',
  imports: [FavoriteBtnComponent],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCardComponent {
  private readonly filmService = inject(FilmService);
  public filmData = input.required<FilmData>();
  public readonly filmClick = output<void>();

  public toggleStatus(id: number): void {
    this.filmService.toggleFavoriteStatus(id);
  }
}
