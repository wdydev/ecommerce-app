import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ModalService} from './services/modal.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService as AdminCategoryService} from './admin/category/category.service';
import {CartCalc} from './pipes/cart.calc';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ModalModule.forRoot(),
    PipesModule
  ],
  providers: [
    ModalService,
    AdminCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
