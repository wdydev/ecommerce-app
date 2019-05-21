import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Product, ProductAttributeI, ProductI} from '../../entity/product';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from './product.service';
import {CategoryService} from '../category/category.service';
import {CategoryI} from '../../entity/category';
import {ObjectID} from '../../entity/mongo.id';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  public product: ProductI;
  public form: FormGroup;
  public products: Array<ProductI>;
  public categories: Array<CategoryI>;
  public childCategories: Array<CategoryI>;

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
      subCategories: new FormControl(),
    });
    this.form.patchValue(this.product);

    await this.modal.open(template);
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

  private createAttributesControls(): void {
    const controls = [];
    for (const attr of this.product.attributes) {
      const options = [];
      for (const option of attr.options) {
        options.push(new FormGroup({
          _id: new FormControl(option._id),
          name: new FormControl(option.name),
          price: new FormControl(option.price)
        }));
      }
      controls.push(new FormGroup({
        name: new FormControl(attr.name),
        _id: new FormControl(attr._id),
        options: new FormArray(options)
      }));
    }

    this.form.setControl('attributes', new FormArray(controls));
  }

  public addOption(index: number): void {
    const control = this.form.get('attributes') as FormArray;
    const options = control.at(index).get('options') as FormArray;
    options.push(new FormGroup({
      _id: new FormControl(ObjectID()),
      name: new FormControl(),
      price: new FormControl(0)
    }));
  }

  public removeOption(i: number, j: number) {
    const control = this.form.get('attributes') as FormArray;
    const options = control.at(i).get('options') as FormArray;
    options.removeAt(j);
  }

  public createAttributes(): void {
    const subCategories: Array<CategoryI> = this.form.get('subCategories').value;
    if (subCategories.length === 0) {
      this.form.setControl('attributes', new FormArray([]));
      return;
    }

    const attributes: Array<ProductAttributeI> = subCategories
    // @ts-ignore
      .flatMap(subCategory => subCategory.attributes)
      .map(attr => {
        attr.options = [];
        return attr;
      });

    this.product.attributes = attributes;
    this.createAttributesControls();
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

  makeSlug(str: string) {
    return str.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/$[^a-z0-9\-]#/g, '')
      .replace(/[\-+]/g, '-');
  }

  public async saveProduct(): Promise<any> {
    try {
      const save: ProductI = {...this.product, ...this.form.value};
      save.slug = this.makeSlug(save.name);

      const product: ProductI = await this.service.saveProduct(save);

      if (this.product._id) {
        this.products = this.products.map(cat => cat._id === this.product._id ? product : cat);
        return;
      }

      this.products.push(product);
    } catch (e) {
      console.log();
      // show a toast message here
    }
    this.cancel();
  }

  public ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
}
