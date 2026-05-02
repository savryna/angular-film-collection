import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import type { FilmData } from '../../models/films.model';
import { SearchByWorldPipe } from '../../pipes/search-by-world-pipe';
import { FilmService } from '../../services/film.service';
import { FilmCardComponent } from '../film-card/film-card.component';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-film-list',
  imports: [FilmCardComponent, SearchInputComponent, SearchByWorldPipe],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent {
  private readonly filmService = inject(FilmService);
  private readonly router = inject(Router);

  public readonly films = this.filmService.films;

  public readonly searchWord = signal('');

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

  public setSearchWord(word: string): void {
    this.searchWord.set(word);
  }
}
