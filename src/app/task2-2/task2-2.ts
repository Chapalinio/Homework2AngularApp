import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task2-2',
  styleUrl: './task2-2.css',
  templateUrl: './task2-2.html',
})
export class Task22 {
  products = [
    {id: 1, name: "Fridge", price: 300, discount: 60},
    {id: 2, name: "Microwawe", price: 50, discount: 10},
    {id: 3, name: "PC", price: 150, discount: 0},
    {id: 4, name: "Toster", price: 30, discount: 40},
    {id: 5, name: "Keyboard", price: 40, discount: 0},
  ]
}
