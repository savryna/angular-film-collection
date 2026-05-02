import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import type { FilmData } from '../../models/films.model';
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
  private readonly router = inject(Router);

  public readonly films = this.filmService.films();

  public redirectDetailsPage(film: FilmData): void {
    void this.router.navigate(['/film/', film.id], {
      state: {
        from: {
          label: 'Home',
          url: '/',
        },

        filmTitle: film.title,
      },
    });
  }
}
