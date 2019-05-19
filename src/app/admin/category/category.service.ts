import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CategoryI} from '../../entity/category';

export interface SaveCatResponse {
  status: number;
  category: CategoryI;
}

export interface GetCatsResponse {
  status: number;
  categories: Array<CategoryI>;
}

@Injectable()
export class CategoryService {
  constructor(private api: ApiService) {
  }

  public async getCategories(): Promise<Array<CategoryI>> {
    try {
      const res: GetCatsResponse = await this.api.get('/categories').toPromise();
      return res.categories || [];
    } catch (e) {
      return [];
    }
  }

  private updateCategory(category: CategoryI): Promise<SaveCatResponse> {
    return this.api.patch(`/categories/${category._id}`, category).toPromise();
  }

  private addCategory(category: CategoryI): Promise<SaveCatResponse> {
    return this.api.post(`/categories`, category).toPromise();
  }

  public async saveCategory(category: CategoryI): Promise<CategoryI> {
    const method = !!category._id ? 'updateCategory' : 'addCategory';
    const res: SaveCatResponse = await this[method](category);
    if (res.status !== 200) {
      throw new Error('Category could not be saved.');
    }

    return res.category;
  }

  public async deleteCategory(category: CategoryI) {
    const res: SaveCatResponse = await this.api.delete(`/categories/${category._id}`).toPromise();
    if (res.status !== 200) {
      throw new Error('Category could not be deleted.');
    }

    return true;
  }
}
