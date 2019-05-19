import {CategoryI} from './category';

export interface AttributeOptionI {
  _id: string;
  name: string;
  price: number;
}

export interface ProductAttributeI {
  _id: string;
  name: string;
  options: Array<AttributeOptionI>;
}

export interface InventoryI {
  _id: string;
  attribute: string;
  options: Array<string>;
  quantity: number;
  purchased: number;
}

export interface ProductI {
  _id: string;
  name: string;
  description: string;
  slug: string;
  category: CategoryI;
  subCategories?: Array<CategoryI>;
  attributes?: Array<ProductAttributeI>;
  inventory?: Array<InventoryI>;
  sku: string;
  images: Array<string>;
  basePrice: number;
  status: number;
}

export class Product implements ProductI {
  // tslint:disable-next-line:variable-name
  public _id: string;
  public name: string;
  public description: string;
  public slug: string;
  public category: CategoryI;
  public subCategories?: Array<CategoryI>;
  public attributes?: Array<ProductAttributeI>;
  public inventory?: Array<InventoryI>;
  public sku: string;
  public images: Array<string>;
  public basePrice: number;
  public status: number;

  constructor(product: ProductI) {
    this._id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.slug = product.slug;
    this.category = product.category;
    this.subCategories = product.subCategories || [];
    this.attributes = product.attributes || [];
    this.inventory = product.inventory || [];
    this.sku = product.sku;
    this.images = product.images;
    this.basePrice = product.basePrice;
    this.status = product.status;
  }
}
