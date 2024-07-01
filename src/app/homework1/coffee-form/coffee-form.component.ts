import { Component } from '@angular/core';
import { CoffeeDataService} from '../../coffee-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { any } from '@uirouter/angular';
import { Coffee, RoastType } from '../../../data/coffee-data';


@Component({
  selector: 'app-coffee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coffee-form.component.html',
  styleUrl: './coffee-form.component.css'
})


export class CoffeeFormComponent {
  coffee : Coffee = {
    id: 0,
    brand: '',
    groundOrBeans: '',
    roast: RoastType.Light,
    singleOrigin: false,
    flavorNotes: ''
    
  };

  roastTypes = Object.values(RoastType); 

  constructor(private coffeeDataService: CoffeeDataService) {}

  onSubmit() {
    
    this.coffeeDataService.addCoffee(this.coffee);
    alert("Coffee added sucessfully");
    this.coffee = {id: 0,
      brand: '',
      groundOrBeans: '',
      roast: RoastType.Light,
      singleOrigin: false,
    flavorNotes: ''
    };
  }

  onReset() {
    this.coffee = {
      id: 0,
      brand: '',
      groundOrBeans: '',
      roast: RoastType.Light,
      singleOrigin: false,
      flavorNotes: ''
    };
  }
}