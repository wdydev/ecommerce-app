import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProductI} from '../../entity/product';
import {ProductService} from './product.service';
import {CartItem} from '../../entity/cart.item';
import {ObjectID} from '../../entity/mongo.id';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  private slug: string;
  private product: ProductI;
  private form: FormGroup;
  private cartItem: CartItem;

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.route.params.subscribe(params => {
      this.slug = params.slug;
      this.loadProduct();
    });
  }

  public async loadProduct(): Promise<void> {
    this.product = await this.service.getProductDetails(this.slug);
    this.form = new FormGroup({quantity: new FormControl(1)});
    const controls = [];
    for (const attr of this.product.attributes) {
      controls.push(new FormGroup({
        _id: new FormControl(attr._id),
        name: new FormControl(attr.name),
        option: new FormControl()
      }));
    }
    this.form.setControl('attributes', new FormArray(controls));

    this.cartItem = {
      _id: ObjectID(),
      product: this.product._id,
      name: this.product.name,
      category: this.product.category,
      image: this.product.images && this.product.images.length > 0 ? this.product.images[0] : '',
      slug: this.product.slug,
      attributes: [],
      quantity: 1,
      rate: +this.product.basePrice,
      price: +this.product.basePrice
    };

    this.form.valueChanges.subscribe(value => {
      this.updatePrice(value);
    });
  }

  private updatePrice(value: CartItem) {
    let price: number = +this.product.basePrice;
    for (const attr of value.attributes) {
      if (attr.option && +attr.option.price > 0) {
        price += (+attr.option.price);
      }
    }

    this.cartItem.rate = price;
    this.cartItem.price = price * this.cartItem.quantity;
    this.cartItem.attributes = value.attributes;
  }

  public inrQty(): void {
    const control = this.form.get('quantity');
    const qty = parseInt(control.value, 10);
    control.setValue(qty + 1);
    this.cartItem.price = (qty + 1) * this.cartItem.rate;
  }

  public dcrQty(): void {
    const control = this.form.get('quantity');
    const qty = parseInt(control.value, 10);
    if (qty > 1) {
      control.setValue(qty - 1);
      this.cartItem.price = (qty + 1) * this.cartItem.rate;
    }
  }

  public addToCart(): void {
    this.service.addToCart(this.cartItem);
  }

  public ngOnInit(): void {
  }
}

