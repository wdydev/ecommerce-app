import {Component, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Category, CategoryI} from '../../entity/category';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  private category: CategoryI;

  constructor(private modal: ModalService) {

  }

  public categoryForm(template: TemplateRef<any>, category: any = {}) {
    this.category = new Category(category);
    this.modal.open(template);
  }

  public cancel(): void {
    // this.modal.close();
  }
}
