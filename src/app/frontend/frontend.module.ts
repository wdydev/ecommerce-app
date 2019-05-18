import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './frontend.routes';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent, LoginComponent , SidebarComponent
  ],
  providers: [],
})
export class FrontendModule {

}
