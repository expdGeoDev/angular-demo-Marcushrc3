import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  private coffees : any = [];

  addCoffee(coffee: any) {
    this.coffees.push(coffee);
  }

  getCoffees() {
    return this.coffees;
  }
}
