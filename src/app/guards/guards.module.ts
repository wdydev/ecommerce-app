import {NgModule} from '@angular/core';
import {UserGuard} from './user.guard';
import {UserNotAuth} from './user.not.auth';

@NgModule({
  providers: [UserGuard, UserNotAuth]
})
export class GuardsModule {

}
