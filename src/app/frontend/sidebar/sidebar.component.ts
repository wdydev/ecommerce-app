import {Component, Input, OnInit} from '@angular/core';
import {ProductI} from '../../entity/product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  @Input() latest: Array<ProductI>;

  constructor() {
    this.latest = [];
  }

  public ngOnInit(): void {
  }
}
