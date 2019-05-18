import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './frontend/frontend.module#FrontendModule'
  }
];
