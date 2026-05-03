import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  public transform(value: number | undefined): string {
    if (value !== undefined) {
      const minutes = Math.floor(value % 60);
      const hours = Math.floor(value / 60);

      return [hours > 0 ? `${hours}h` : null, minutes > 0 ? `${minutes}h` : null].filter(Boolean).join(' ');
    }
    return '';
  }
}
