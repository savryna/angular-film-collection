import type { Routes } from '@angular/router';

import { FilmDetailsComponent } from './films/pages/film-details/film-details.component';
import { FilmListPageComponent } from './films/pages/film-list/film-list-page.component';
import { EmptyLayoutComponent } from './layout/components/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { ROUTES_LIST } from './shared/constans';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: ROUTES_LIST.home,
        component: FilmListPageComponent,
        data: { breadcrumbs: 'Home' },
      },
      {
        path: ROUTES_LIST.about,
        component: AboutComponent,
        data: { breadcrumbs: 'About' },
      },
      {
        path: ROUTES_LIST.detailed,
        component: FilmDetailsComponent,
      },
    ],
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: ROUTES_LIST.notFound,
        component: NotFoundComponent,
      },
      {
        path: ROUTES_LIST.other,
        redirectTo: ROUTES_LIST.notFound,
      },
    ],
  },
];
