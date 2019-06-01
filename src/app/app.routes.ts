import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './frontend/frontend.module#FrontendModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];
