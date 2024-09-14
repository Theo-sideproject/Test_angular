import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service sera disponible partout dans l'application
})

export class DataService {
  private data: string[] = [''];

  constructor() {}

  getData() {
    return this.data;
  }

  addData(newItem: string) {
    console.log("newItem", newItem, " and all list : ", this.data);
    this.data.push(newItem);
  }
}
