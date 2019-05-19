export interface CategoryI {
  name: string;
  slug: string;
  parent: string;
  attributes: Array<any>;
  description: string;
  image: string;
  status: boolean;
  _id?: string;
}

export class Category implements CategoryI {
  public name: string;
  public slug: string;
  public parent: string;
  public attributes: Array<any>;
  public description: string;
  public image: string;
  public status: boolean;
  // tslint:disable-next-line:variable-name
  public _id?: string;

  constructor(category: CategoryI) {
    this.name = category.name;
    this.parent = category.parent;
    this.slug = category.slug;
    this.attributes = category.attributes || [];
    this.description = category.description;
    this.image = category.image;
    this.status = category.status;
    this._id = category._id;
  }
}
