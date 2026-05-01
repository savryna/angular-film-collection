import type { InputSignal } from '@angular/core';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { FilmData } from '../../models/films.model';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCardComponent {
  public filmData: InputSignal<FilmData> = input.required();
  protected readonly String = String;
}
