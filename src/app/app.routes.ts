import type { Routes } from '@angular/router';

import { EmptyLayoutComponent } from './layout/components/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';
import { ROUTES_LIST } from './shared/constans';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: ROUTES_LIST.home,
        loadComponent: () =>
          import('./films/pages/film-list/film-list-page.component').then((m) => m.FilmListPageComponent),
        data: { breadcrumbs: 'Home' },
      },
      {
        path: ROUTES_LIST.about,
        loadComponent: () => import('./layout/pages/about/about.component').then((m) => m.AboutComponent),
        data: { breadcrumbs: 'About' },
      },
      {
        path: ROUTES_LIST.detailed,
        loadComponent: () =>
          import('./films/pages/film-details/film-details.component').then((m) => m.FilmDetailsComponent),
      },
    ],
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: ROUTES_LIST.notFound,
        loadComponent: () => import('./layout/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
      },
      {
        path: ROUTES_LIST.other,
        redirectTo: ROUTES_LIST.notFound,
      },
    ],
  },
];
