import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Category, CategoryI} from '../../entity/category';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
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
      attributes: new FormArray([]),
      status: new FormControl(),
    });
    this.form.patchValue(this.category);

    await this.modal.open(template);
  }

  public addAttribute(): void {
    const control = this.form.get('attributes') as FormArray;
    control.push(new FormGroup({name: new FormControl()}));
  }

  public removeAttribute(index: number) {
    const control = this.form.get('attributes') as FormArray;
    control.removeAt(index);
  }

  public fileUploaded(file: string): void {
    this.category.image = file;
  }

  public cancel(): void {
    // this.modal.close();
  }

  public async saveCategory(): Promise<any> {
    try {
      const save: CategoryI = {...this.category, ...this.form.value};
      const category: CategoryI = await this.service.saveCategory(save);

      this.cancel();
      if (this.category._id) {
        this.categories = this.categories.map(cat => cat._id === this.category._id ? category : cat);
        return;
      }

      this.categories.push(category);
    } catch (e) {
      // show a toast message here
      this.cancel();
    }
  }

  public deleteDialog(template: TemplateRef<any>, category: CategoryI) {
    this.category = category;
    this.modal.open(template);
  }

  public async confirmDelete(): Promise<any> {
    try {
      const res = await this.service.deleteCategory(this.category);
      // not required
      if (!res) {
        throw new Error('Category could not be deleted.');
      }
      this.categories = this.categories.filter(cat => cat._id !== this.category._id);
    } catch (e) {
      // show a toast message here
    }
  }

  public async loadCategories(): Promise<void> {
    this.categories = await this.service.getCategories();
  }

  public ngOnInit(): void {
    this.loadCategories();
  }
}
