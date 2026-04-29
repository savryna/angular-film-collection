import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent {}
