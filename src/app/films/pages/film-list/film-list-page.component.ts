import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { FilmListComponent } from '../../components/film-list/film-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import type { FilmData } from '../../models/films.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-list-page',
  imports: [FilmListComponent, SearchInputComponent],
  templateUrl: './film-list-page.component.html',
  styleUrl: './film-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListPageComponent {
  private readonly filmService = inject(FilmService);
  public readonly searchWord = signal<string | null>(null);
  public readonly filteredFilms = computed(() => this.filterFilms());
  public readonly films = this.filmService.films;

  public setSearchWord(word: string): void {
    this.searchWord.set(word);
  }

  private filterFilms(): FilmData[] {
    const searchWord = this.searchWord()?.toLowerCase() ?? '';

    return this.films().filter((film) => film.title.toLowerCase().includes(searchWord));
  }
}
