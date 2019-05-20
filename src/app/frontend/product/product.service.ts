import {Injectable} from '@angular/core';
import {ProductI} from '../../entity/product';
import {ApiService} from '../../services/api.service';
import {GetProductResponse} from '../../admin/products/product.service';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../entity/cart.item';

@Injectable()
export class ProductService {
  constructor(private api: ApiService, private cart: CartService) {
  }

  public async getProductDetails(slug: string): Promise<ProductI> {
    const res: GetProductResponse = await this.api.get(`products/${slug}`).toPromise();
    return res.product;
  }

  public addToCart(item: CartItem): void {
    this.cart.add(item);
  }
}
