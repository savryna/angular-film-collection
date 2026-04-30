import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-film-list',
  imports: [],
  templateUrl: './film-list-page.component.html',
  styleUrl: './film-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListPageComponent {}
