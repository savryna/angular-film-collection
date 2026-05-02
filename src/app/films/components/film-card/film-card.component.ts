import type { InputSignal } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';

import { FavoriteBtnComponent } from '../../../shared/button/favorite-btn/favorite-btn.component';
import type { FilmData } from '../../models/films.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-card',
  imports: [FavoriteBtnComponent],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCardComponent {
  private readonly filmService = inject(FilmService);
  public filmData: InputSignal<FilmData> = input.required();
  public readonly filmClick = output<void>();

  public toggleStatus(id: number): void {
    this.filmService.toggleFavoriteStatus(id);
  }
}
