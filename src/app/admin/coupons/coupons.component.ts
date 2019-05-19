import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-admin-coupons',
  templateUrl: './coupons.component.html'
})
export class CouponsComponent {
  constructor(private modal: ModalService) {

  }
  private viewCoupon(template: TemplateRef<any>): any {
    this.modal.open(template);

  }

}
