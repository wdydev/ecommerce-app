import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {routes} from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  providers: [],
})
export class AdminModule {

}
