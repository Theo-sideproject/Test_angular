import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-test-components',
  standalone: true,
  imports: [
    FormsModule,
    ContactComponent
  ],
  templateUrl: './test-components.component.html',
  styleUrl: './test-components.component.scss'
})
export class TestComponentsComponent {
  message = 'Bonjour, je suis un composant Angular !';
  imageUrl='https://angular.io/assets/images/logos/angular/angular.png';


  changerMessage() {
    this.message = 'Nouveau message';
  }
}
