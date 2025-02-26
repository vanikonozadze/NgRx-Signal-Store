import { Component } from '@angular/core';
import { FoodItemComponent } from "../food-item/food-item.component";
import { FOOD_ARR } from "../../core/configs/items.config";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        FoodItemComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  public readonly FOOD_ARR = FOOD_ARR
}
