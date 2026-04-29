import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-film-list',
  imports: [],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent {}
