import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {setTheme} from 'ngx-bootstrap/utils';
import {AppService} from './services/app.service';
import {CategoryDisplayI} from './entity/category';
import {CartService} from './services/cart.service';
import {CartItem} from './entity/cart.item';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private title: string;
  private categories: Array<CategoryDisplayI>;
  private cart: Array<CartItem>;

  constructor(private router: Router,
              private renderer: Renderer2,
              private service: AppService,
              private cartService: CartService) {
    // watch for change in navigation
    this.watchNavigation();

    // bootstrap setup
    setTheme('bs3');

    // set the title
    this.title = 'eMarket';

    this.cart = this.cartService.getItems();
  }

  private watchNavigation(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const currentRoute = event.url.slice(1);
        if (!currentRoute) {
          this.renderer.addClass(document.body, 'common-home');
          return;
        }
        this.renderer.removeClass(document.body, 'common-home');
      }
    });
  }

  public removeCartItem(item: CartItem): void {
    this.cartService.remove(item);
  }

  public async bootstrap(): Promise<void> {
    // make categories for nav
    // make categories for header
    this.categories = await this.service.prepareCategories();

    this.cartService.subscribe(items => {
      this.cart = items;
    });
  }

  public ngOnInit(): void {
    this.bootstrap();
  }
}
