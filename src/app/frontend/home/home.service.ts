import {Injectable, OnInit} from '@angular/core';
import {ProductI} from '../../entity/product';
import {ApiService} from '../../services/api.service';
import {GetProductsResponse} from '../../admin/products/product.service';

@Injectable()
export class HomeService {
  private latest: Array<ProductI>;
  private recommended: Array<ProductI>;
  private allProducts: Array<ProductI>;

  constructor(private api: ApiService) {
  }

  private async loadProducts(): Promise<void> {
    const res: GetProductsResponse = await this.api.get('/products').toPromise();
    const products = res.products;

    this.allProducts = [...products];
    this.latest = [...products];

    this.latest.sort((p1: ProductI, p2: ProductI) => {
      return new Date(p1.updatedAt) > new Date(p2.updatedAt) ? 1 : -1;
    });

    this.latest = this.latest.slice(0, 5);
    this.recommended = this.allProducts.slice(0, 5);
  }

  public async getLatest(): Promise<Array<ProductI>> {
    if (!this.latest) {
      await this.loadProducts();
    }
    return this.latest;
  }

  public async getRecommended(): Promise<Array<ProductI>> {
    if (!this.recommended) {
      await this.loadProducts();
    }
    return this.recommended;
  }
}
