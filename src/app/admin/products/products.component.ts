import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Product, ProductI} from '../../entity/product';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from './product.service';
import {CategoryService} from '../category/category.service';
import {CategoryI} from '../../entity/category';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  private product: ProductI;
  private form: FormGroup;
  private products: Array<ProductI>;
  private categories: Array<CategoryI>;
  private childCategories: Array<CategoryI>;

  constructor(private modal: ModalService, private service: ProductService, private categoryService: CategoryService) {
    this.products = [];
    this.categories = [];
    this.childCategories = [];
  }

  public async productForm(template: TemplateRef<any>, product: any = {}) {
    this.product = new Product(product);

    this.form = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      status: new FormControl(),
      sku: new FormControl(),
      basePrice: new FormControl(),
      attributes: new FormArray([]),
      inventory: new FormArray([]),
      subCategories: new FormArray([]),
    });
    this.form.patchValue(this.product);

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

  public fileUploaded(files: Array<string>): void {
    this.product.images = files;
  }

  public cancel(): void {
    this.modal.close();
  }

  public async saveProduct(): Promise<any> {
    try {
      const save: ProductI = {...this.product, ...this.form.value};
      const product: ProductI = await this.service.saveProduct(save);

      this.cancel();
      if (this.product._id) {
        this.products = this.products.map(cat => cat._id === this.product._id ? product : cat);
        return;
      }

      this.products.push(product);
    } catch (e) {
      // show a toast message here
      this.cancel();
    }
  }

  public deleteDialog(template: TemplateRef<any>, product: ProductI) {
    this.product = product;
    this.modal.open(template);
  }

  public async confirmDelete(): Promise<any> {
    try {
      const res = await this.service.deleteProduct(this.product);
      // not required
      if (!res) {
        throw new Error('Product could not be deleted.');
      }
      this.products = this.products.filter(cat => cat._id !== this.product._id);
    } catch (e) {
      // show a toast message here
    }
  }

  public async loadProducts(): Promise<void> {
    this.products = await this.service.getProducts();
  }

  public async loadCategories(): Promise<void> {
    this.categories = await this.categoryService.getCategories();
  }

  public async loadChildCategories(category: CategoryI): Promise<void> {
    this.childCategories = await this.categoryService.getChildCategories(category);
  }

  public getChildCategories() {
    const category = this.form.get('category').value as CategoryI;
    this.loadChildCategories(category);
  }

  public ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
}
