import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ProductI} from '../../entity/product';

export interface SaveProductResponse {
  status: number;
  product: ProductI;
}

export interface GetProductsResponse {
  status: number;
  products: Array<ProductI>;
}

@Injectable()
export class ProductService {
  constructor(private api: ApiService) {
  }

  public async getProducts(): Promise<Array<ProductI>> {
    try {
      const res: GetProductsResponse = await this.api.get('/products').toPromise();
      return res.products || [];
    } catch (e) {
      return [];
    }
  }

  private updateProduct(product: ProductI): Promise<SaveProductResponse> {
    return this.api.patch(`/products/${product._id}`, product).toPromise();
  }

  private addProduct(product: ProductI): Promise<SaveProductResponse> {
    return this.api.post(`/products`, product).toPromise();
  }

  public async saveProduct(product: ProductI): Promise<ProductI> {
    const method = !!product._id ? 'updateProduct' : 'addProduct';
    const res: SaveProductResponse = await this[method](product);
    if (res.status !== 200) {
      throw new Error('Product could not be saved.');
    }

    return res.product;
  }

  public async deleteProduct(product: ProductI) {
    const res: SaveProductResponse = await this.api.delete(`/products/${product._id}`).toPromise();
    if (res.status !== 200) {
      throw new Error('Product could not be deleted.');
    }

    return true;
  }
}
