import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly title = signal('film-collection');

  constructor() {
    [...document.querySelectorAll('*')].forEach((el) => {
      if (el.scrollWidth > document.documentElement.clientWidth) {
        console.log('OVERFLOW:', el);
      }
    });
  }
}
