import { Component } from '@angular/core';
import { CoffeeDataService, RoastType } from '../coffee-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { any } from '@uirouter/angular';

@Component({
  selector: 'app-coffee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coffee-form.component.html',
  styleUrl: './coffee-form.component.css'
})


export class CoffeeFormComponent {
  coffee = {
    brand: '',
    groundOrBeans: '', // Defina um valor padrão
    roastType: RoastType.Light // Defina um valor padrão usando o enum
  };

  roastTypes = Object.values(RoastType); // Converta o enum para um array de valores

  constructor(private coffeeDataService: CoffeeDataService) {}

  onSubmit() {
    
    this.coffeeDataService.addCoffee(this.coffee);
    alert("Coffee added sucessfully");
    this.coffee = {
      brand: '',
      groundOrBeans: '',
      roastType: RoastType.Light
    };
  }

  onReset() {
    this.coffee = {
      brand: '',
      groundOrBeans: '',
      roastType: RoastType.Light
    };
  }
}