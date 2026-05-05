import { NgClass } from '@angular/common';
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
  public favoriteStatus = input.required<boolean>();

  public handleClick(event: PointerEvent): void {
    event.stopPropagation();

    this.clicked.emit();
  }
}
