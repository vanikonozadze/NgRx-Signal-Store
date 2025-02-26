import {Component, inject} from '@angular/core';
import {CartStore} from "../../store/cart.store";

@Component({
    selector: 'app-layout-header',
    standalone: true,
    imports: [],
    templateUrl: './layout-header.component.html',
    styleUrl: './layout-header.component.scss'
})
export class LayoutHeaderComponent {
  cartStore = inject(CartStore)
}
