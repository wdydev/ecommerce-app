import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from './category.service';
import {CategoryI} from '../../entity/category';
import {ModalService} from '../../services/modal.service';
import {ProductI} from '../../entity/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  private slug: string;
  public products: Array<ProductI>;

  constructor(private modal: ModalService, private route: ActivatedRoute, private service: CategoryService) {
    this.route.params.subscribe(param => {
      this.slug = param.slug;
      this.loadCategory();
    });

  }

  public async loadCategory() {
    this.products = await this.service.getProducts(this.slug);
  }

}

