import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CartItem} from '../entity/cart.item';

@Injectable({providedIn: 'root'})
export class CartService extends Subject<Array<CartItem>> {
  private items: Array<CartItem>;

  constructor() {
    super();
    this.items = [];
    this.loadCart();
  }

  private loadCart() {
    const cart = localStorage.getItem('cart');
    if (cart && JSON.parse(cart)) {
      this.items = JSON.parse(cart);
    }
  }

  private updateStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  public add(item: CartItem) {
    this.items.push(item);
    this.next(this.items);
    this.updateStorage();
  }

  public remove(item: CartItem) {
    this.items = this.items.filter(i => i._id !== item._id);
    this.next(this.items);
    this.updateStorage();
  }

  public removeAll() {
    localStorage.removeItem('cart');
    this.items = [];
    this.next(this.items);
  }

  public update(item: CartItem) {
    this.items = this.items.map(i => {
      if (i._id === item._id) {
        return item;
      }
      return i;
    });

    this.next(this.items);
    this.updateStorage();
  }

  public getItems(): Array<CartItem> {
    return this.items;
  }
}
