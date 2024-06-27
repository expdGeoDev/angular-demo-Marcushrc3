import { Component } from '@angular/core';
import { CoffeeDataService } from '../coffee-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coffee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coffee-form.component.html',
  styleUrl: './coffee-form.component.css'
})


export class CoffeeFormComponent {
  coffee = {
    brand: '',
    groundOrBeans: '',
    roastType: ''
  };

  constructor(private coffeeDataService: CoffeeDataService) {}

  onSubmit() {
    this.coffeeDataService.addCoffee(this.coffee);
    this.coffee = {
      brand: '',
      groundOrBeans: '',
      roastType: ''
    };
  }

  onReset() {
    this.coffee = {
      brand: '',
      groundOrBeans: '',
      roastType: ''
    };
  }
}