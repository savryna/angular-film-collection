import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { AutofocusDirective } from '../../../shared/directive/autofocus.directive';

@Component({
  selector: 'app-search-input',
  imports: [ReactiveFormsModule, AutofocusDirective],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  public searchForm: FormGroup;
  public readonly searchWordChange = output<string>();

  constructor() {
    this.searchForm = new FormGroup({
      searchWord: new FormControl(''),
    });
  }

  public ngOnInit(): void {
    this.searchForm.controls['searchWord'].valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((filterWord) => {
        this.searchWordChange.emit(filterWord);
      });
  }
}
