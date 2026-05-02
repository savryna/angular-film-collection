import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-input',
  imports: [ReactiveFormsModule],
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
