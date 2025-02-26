import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = []

  constructor() { }

  addItem(item: any) {
    this.cart.push(item);
  }

  getItems() {
    return [...this.cart];
  }

  deleteItem(id: number) {
    this.cart = this.cart.filter((_, index) => index !== id);
  }
}
