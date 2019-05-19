import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Category, CategoryI} from '../../entity/category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  private category: CategoryI;
  private form: FormGroup;
  private categories: Array<CategoryI>;

  constructor(private modal: ModalService, private service: CategoryService) {
    this.categories = [];
  }

  public async categoryForm(template: TemplateRef<any>, category: any = {}) {
    this.category = new Category(category);
    this.form = new FormGroup({
      name: new FormControl(),
      parent: new FormControl(),
      description: new FormControl(),
    });
    const res = await this.modal.open(template);
  }

  public cancel(): void {
    this.modal.close();
  }

  public async loadCategories(): Promise<void> {
    try {
      const res: any = await this.service.getCategories();
      this.categories = res.categories || [];
    } catch (e) {
      console.log(e);
    }
  }

  public ngOnInit(): void {
    this.loadCategories();
  }
}
