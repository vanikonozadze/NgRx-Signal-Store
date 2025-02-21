import { Routes } from '@angular/router';
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./shared/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];
