import {Component} from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  private bannerSlider: any;

  constructor() {
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
  }
}

