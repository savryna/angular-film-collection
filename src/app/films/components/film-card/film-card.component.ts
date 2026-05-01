import type { InputSignal } from '@angular/core';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { FilmData } from '../../models/films.model';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCardComponent {
  public filmData: InputSignal<FilmData> = input.required();
}
