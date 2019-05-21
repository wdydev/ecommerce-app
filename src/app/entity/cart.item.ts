import {CategoryI} from './category';

export interface CartAttribute {
  _id: string;
  name: string;
  option: { _id: string, name: string, price: number };
}

export interface CartItem {
  _id: string;
  product: string;
  name: string;
  rate: number;
  price: number;
  quantity: number;
  attributes: Array<CartAttribute>;
  slug: string;
  category: CategoryI;
  image: string;
}
