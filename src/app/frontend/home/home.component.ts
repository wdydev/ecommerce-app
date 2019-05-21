import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HomeService} from './home.service';
import {ProductI} from '../../entity/product';
import {UserI} from '../../entity/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './home.component.html',
  styles: [
      `
      .item .inner {
        display: block;
        width: inherit;
        height: 250px;
        border: 1px solid #ddd;
        margin: 5px;
        overflow: hidden;
      }

      .item .inner .image {
        width: inherit;
        height: 250px;
        display: table-cell;
        vertical-align: middle;
      }

      .item .inner .image img {
        max-height: 230px;
      }

      .deals-layout1 .so-deal .extraslider-inner .item .caption h4 {
        margin-top: 15px;
      }
    `
  ]
})

export class HomeComponent implements OnInit {
  public bannerSlider: any;
  public latest: Array<ProductI>;
  public recommended: Array<ProductI>;

  constructor(private title: Title, private service: HomeService) {
    this.bannerSlider = {
      nav: true,
      dots: false,
      loop: false,
      autoplay: false,
      lazyLoad: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 5000,
      navRewind: true,
      navText: ['', ''],
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        767: {
          items: 1,
          nav: true,
        },
        991: {
          items: 1,
          nav: true,
        },
        1199: {
          items: 1,
          nav: true,
        },
      }
    };
    title.setTitle('Welcome to our E-commerce platform');
  }

  public async getProducts(): Promise<void> {
    this.latest = await this.service.getLatest();
    this.recommended = await this.service.getRecommended();
  }

  public ngOnInit(): void {
    this.getProducts();
  }
}

