import {Injectable} from '@angular/core';
import {CategoryService} from '../admin/category/category.service';
import {CategoryDisplayI, CategoryI} from '../entity/category';

@Injectable({providedIn: 'root'})
export class AppService {
  constructor(private categoryService: CategoryService) {
  }

  public async prepareCategories(): Promise<Array<CategoryDisplayI>> {
    try {
      const cats: Array<CategoryI> = await this.categoryService.getCategories();
      return cats
        .filter(cat => !cat.parent)
        .map(cat => {
          return {...cat, children: cats.filter(c => c.parent === cat._id)};
        });
    } catch (e) {
      return [];
    }
  }
}
