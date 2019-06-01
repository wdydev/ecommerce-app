import {Component, Input, OnInit} from '@angular/core';
import {ProductI} from '../../entity/product';
import {HomeService} from '../home/home.service';
import {UserService} from '../../services/user.service';
import {UserI} from '../../entity/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  @Input() latest: Array<ProductI>;
  public user: UserI;

  constructor(private userService: UserService) {
    this.latest = [];
    userService.user$.subscribe(user => this.user = user);
  }

  public ngOnInit(): void {
  }
}
