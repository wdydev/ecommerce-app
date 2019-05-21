import {Component, OnInit} from '@angular/core';
import {UserI} from '../../entity/user';
import {UserService} from '../../services/user.service';
import {Order} from '../../entity/order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  private user: UserI;
  private id: string;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) {

    this.user = userService.user;
    userService.user$.subscribe(user => this.user = user);
    this.router.params.subscribe(params => this.id = params.id);


  }

  ngOnInit(): void {
  }
}
