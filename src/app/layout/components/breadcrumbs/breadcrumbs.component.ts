import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FilmService } from '../../../films/services/film.service';
import { ROUTES_LIST } from '../../../shared/constans';

type Breadcrumb = {
  label: string;
  url?: string;
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
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);

  public readonly breadcrumbs = signal<Breadcrumb[]>([]);

  constructor() {
    effect(() => {
      if (this.router.currentNavigation() === null) {
        this.buildBreadcrumbs();
      }
    });
  }

  private buildBreadcrumbs(): void {
    const breadcrumbs: Breadcrumb[] = [];
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
              label: state.from?.label ?? 'Home',
              url: state.from?.url ?? ROUTES_LIST.main,
            },

            {
              label: state?.filmTitle ?? this.filmService.currentFilm()?.title ?? 'Unknown Film',
            },
          ]
        );
      }

      currentRoute = currentRoute.firstChild;
      this.breadcrumbs.set(breadcrumbs);
    }
  }
}
