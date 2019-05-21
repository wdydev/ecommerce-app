import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HomeService} from './home.service';
import {ProductI} from '../../entity/product';

@Component({
  selector: 'app-frontend',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  private bannerSlider: any;
  private latest: Array<ProductI>;
  private recommended: Array<ProductI>;

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

