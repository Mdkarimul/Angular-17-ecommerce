import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, NavigationComponent,  HeroSliderComponent]
})
export class HomeComponent {

}
