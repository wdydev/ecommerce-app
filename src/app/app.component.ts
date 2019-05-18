import {Component, Renderer2, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {setTheme} from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mwa-app';

  constructor(private router: Router, private renderer: Renderer2) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const currentRoute = event.url.slice(1);
        if (!currentRoute) {
          renderer.addClass(document.body, 'common-home');
          return;
        }
        renderer.removeClass(document.body, 'common-home');
      }
    });

    setTheme('bs3');
  }
}
