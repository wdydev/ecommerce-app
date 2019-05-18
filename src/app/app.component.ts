import {Component, Renderer2} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
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
  }
}
