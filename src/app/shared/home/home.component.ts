import { Component } from '@angular/core';
import {FoodItemComponent} from "../food-item/food-item.component";

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
  public foodArr = [
    {
      id: 1,
      name: "Apple"
    },
    {
      id: 2,
      name: "Banana"
    },
    {
      id: 3,
      name: "Watermelon"
    },
    {
      id: 4,
      name: "Grapes"
    },
    {
      id: 5,
      name: "Lemon"
    },
    {
      id: 6,
      name: "Orange"
    },
  ]
}
