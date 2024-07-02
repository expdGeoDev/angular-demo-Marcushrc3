import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Coffee, RoastType } from '../../data/coffee-data';
import { CoffeeDataService} from '../coffee-data.service';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})
export class AddCoffeeFormComponent {
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

}
