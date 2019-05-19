import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CategoryI} from '../../entity/category';

@Injectable()
export class CategoryService {
  constructor(private api: ApiService) {
  }

  public async getCategories(): Promise<Array<CategoryI>> {
    const res = await this.api.get('/categories').toPromise();
    console.log(res);
    return null;
  }

  public async saveCategory() {

  }
}
