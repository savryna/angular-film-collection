import { NgClass } from '@angular/common';
import type { InputSignal } from '@angular/core';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  imports: [NgClass],
  templateUrl: './favorite-btn.component.html',
  styleUrl: './favorite-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteBtnComponent {
  public readonly clicked = output();
  public favoriteStatus: InputSignal<boolean> = input.required();

  public handleClick(event: Event): void {
    event.stopPropagation();

    this.clicked.emit();
  }
}
