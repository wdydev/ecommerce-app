import {Injectable} from '@angular/core';
import {ProductI} from '../../entity/product';
import {ApiService} from '../../services/api.service';
import {GetProductResponse} from '../../admin/products/product.service';

@Injectable()
export class ProductService {
  constructor(private api: ApiService) {
  }

  public async getProductDetails(slug: string): Promise<ProductI> {
    const res: GetProductResponse = await this.api.get(`products/${slug}`).toPromise();
    return res.product;
  }
}
