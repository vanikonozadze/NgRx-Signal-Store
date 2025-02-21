import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-food-item',
    standalone: true,
    imports: [],
    templateUrl: './food-item.component.html',
    styleUrl: './food-item.component.scss'
})
export class FoodItemComponent {
  @Input() foodItem: any;

  addToCart(item: string) {
    alert(item)
  }
}
