import {Component, inject} from '@angular/core';
import { FoodItemComponent } from "../food-item/food-item.component";
import { FOOD_ARR } from "../../core/configs/items.config";
import { CartStore } from "../../store/cart.store";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        FoodItemComponent
    ],
    providers: [ CartStore ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly cartStore = inject(CartStore)
  public readonly FOOD_ARR = FOOD_ARR

  show(){
    console.log(this.cartStore.cart())
  }
}
