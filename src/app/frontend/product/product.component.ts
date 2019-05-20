import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProductI} from '../../entity/product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  private slug: string;
  private product: ProductI;

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.route.params.subscribe(params => {
      this.slug = params.slug;
      this.loadProduct();
    });
  }

  public async loadProduct(): Promise<void> {
    this.product = await this.service.getProductDetails(this.slug);
  }

  public ngOnInit(): void {
  }
}

