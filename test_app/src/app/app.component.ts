import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TestComponentsComponent
} from "./test-components/test-components.component";
import {ListsFruitsComponent} from "./lists-fruits/lists-fruits.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentsComponent, ListsFruitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}

