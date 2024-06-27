import { Component, OnInit } from '@angular/core';
import { CoffeeDataService } from '../coffee-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent implements OnInit {
  coffees = [];

  constructor(private coffeeDataService: CoffeeDataService) {}

  ngOnInit() {
    this.coffees = this.coffeeDataService.getCoffees();
  }
}
