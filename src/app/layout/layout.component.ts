import { Component } from '@angular/core';
import {LayoutHeaderComponent} from "./layout-header/layout-header.component";
import {LayoutFooterComponent} from "./layout-footer/layout-footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        LayoutHeaderComponent,
        LayoutFooterComponent,
        RouterOutlet
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
