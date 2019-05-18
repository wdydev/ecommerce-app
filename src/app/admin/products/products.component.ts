import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  constructor(private modal: ModalService) {

  }

  private addProduct(template: TemplateRef<any>): any {
    this.modal.open(template);
  }
}
