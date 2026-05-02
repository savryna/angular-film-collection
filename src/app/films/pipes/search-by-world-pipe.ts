import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

import type { FilmData } from '../models/films.model';

@Pipe({
  name: 'searchByWorld',
})
export class SearchByWorldPipe implements PipeTransform {
  public transform(value: FilmData[], word: string | null): FilmData[] {
    if (word === null) {
      return value;
    }
    return value.filter((item: FilmData) => {
      const itemName = item.title.toLowerCase();
      const searchWord = word.toLowerCase().trim();
      return itemName.includes(searchWord);
    });
  }
}
