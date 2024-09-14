import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { DataService } from '../data.service'; // Importer le service

@Component({
  selector: 'app-lists-fruits',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './lists-fruits.component.html',
  styleUrl: './lists-fruits.component.scss'
})
export class ListsFruitsComponent {
  isActive : boolean = true;

  // fruits :string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  fruits: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fruits = this.dataService.getData(); // Récupère les données du service
  }

  newFruit: string = '';

  selectedFruit = '';

  onSelect(fruit: string) {
    this.selectedFruit = fruit;
  }

  onRemove(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }

  addFruit(newItem: string) {
    this.dataService.addData(newItem); // Ajoute un nouvel élément via le service
    this.fruits = this.dataService.getData(); // Met à jour la liste

    // if (this.newFruit.trim()) { // Vérifie si le champ n'est pas vide
    //   this.fruits.push(this.newFruit.trim());
    //   this.newFruit = ''; // Réinitialise le champ après l'ajout
    // }
  }

  onReset() {
    this.fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
    this.selectedFruit = '';
  }

  onSort() {
    this.fruits.sort();
  }

  onReverse() {
    this.fruits.reverse();
  }

  onShuffle() {
    for (let i = this.fruits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.fruits[i], this.fruits[j]] = [this.fruits[j], this.fruits[i]];
    }
  }

  onClear() {
    this.fruits = [];
    this.selectedFruit = '';
  }

}
