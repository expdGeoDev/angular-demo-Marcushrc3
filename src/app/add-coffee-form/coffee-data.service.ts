import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  private coffees : any = [];

  addCoffee(coffee: { brand: string, groundOrBeans: string, roastType: RoastType }) {

    console.log('Submitted coffee:', coffee);
    console.log('The Complete list is:', this.coffees);
    this.coffees.push(coffee);
  }

}


export enum RoastType {
  Light = 'Light',
  Medium = 'Medium',
  Dark = 'Dark'
}
