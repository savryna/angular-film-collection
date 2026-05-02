import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FilmService } from '../../../films/services/film.service';

type Breadcrumb = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly filmService = inject(FilmService);
  private readonly router = inject(Router);

  public readonly breadcrumbs = signal<Breadcrumb[]>([]);

  constructor() {
    effect(() => {
      this.router.currentNavigation();

      if (this.router.url !== '') {
        console.log('hihihi', event, this.router.url);
        this.buildBreadcrumbs();
      }
    });
    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs(): void {
    const breadcrumbs = [];
    let currentRoute = this.activatedRoute.firstChild;

    while (currentRoute !== null) {
      const breadcrumbFromRouterData = currentRoute.snapshot?.data['breadcrumbs'];

      if (breadcrumbFromRouterData !== undefined) {
        breadcrumbs.push({
          label: breadcrumbFromRouterData,
          url: `/${currentRoute.snapshot.url.map((segment) => segment.path).join('/')}`,
        });
      }

      if (this.router.url.includes('/film')) {
        const state = history.state;
        breadcrumbs.push(
          ...[
            state?.from ?? {
              label: 'Home',
              url: '/',
            },

            {
              label: state?.filmTitle ?? this.filmService.currentFilm()?.title ?? 'Unknow Film',
            },
          ]
        );
      }

      currentRoute = currentRoute.firstChild;
      this.breadcrumbs.set(breadcrumbs);
    }

    console.log('bibibi', breadcrumbs);
  }
}
