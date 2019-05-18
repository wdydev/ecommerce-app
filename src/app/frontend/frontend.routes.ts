import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {OrderInformationComponent} from './order-information/order-information.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}
  , {path: 'login', component: LoginComponent}
  , {path: 'register', component: RegisterComponent}
  , {path: 'my-account', component: MyAccountComponent}
  , {path: 'order-history' , component: OrderHistoryComponent}
  , {path: 'order-information' , component: OrderInformationComponent}

  ];
