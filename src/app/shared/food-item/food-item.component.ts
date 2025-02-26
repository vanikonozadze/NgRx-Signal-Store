import {Component, inject, Input} from '@angular/core';
import {CartStore} from "../../store/cart.store";

@Component({
    selector: 'app-food-item',
    standalone: true,
    imports: [],
    templateUrl: './food-item.component.html',
    styleUrl: './food-item.component.scss'
})
export class FoodItemComponent {
  @Input() foodItem: any;
  readonly cartStore = inject(CartStore)

  addToCart(item: string) {
    this.cartStore.addItem(item);
    console.log(this.cartStore.cart())
  }
}
