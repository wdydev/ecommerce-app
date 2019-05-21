import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from './category.service';
import {CategoryI} from '../../entity/category';
import {ModalService} from '../../services/modal.service';
import {ProductI} from '../../entity/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
    `
      .item .inner {
        display: block;
        width: inherit;
        height: 250px;
        border: 1px solid #ddd;
        margin: 5px;
        overflow: hidden;
      }

      .item .inner .image {
        width: inherit;
        height: 250px;
        display: table-cell;
        vertical-align: middle;
      }

      .item .inner .image img {
        max-height: 230px;
      }

      .deals-layout1 .so-deal .extraslider-inner .item .caption h4 {
        margin-top: 15px;
      }
    `
  ]
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

