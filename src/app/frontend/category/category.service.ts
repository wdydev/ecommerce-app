import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Product, ProductI} from '../../entity/product';

@Injectable()
export class CategoryService {
  constructor(private api: ApiService) {
  }

  public async getProducts(slug: string): Promise<Array<ProductI>> {
    const res = await this.api.get(`/category/products/${slug}`).toPromise();
    return res.products || [];
  }
}
