import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilmListComponent } from '../../components/film-list/film-list.component';

@Component({
  selector: 'app-film-list-page',
  imports: [FilmListComponent],
  templateUrl: './film-list-page.component.html',
  styleUrl: './film-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListPageComponent {}
