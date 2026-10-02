import { Component } from '@angular/core';
import { ArrayFilterPipe } from '../pipes/array-filter-pipe';

@Component({
  imports: [ArrayFilterPipe],
  selector: 'app-task1-1',
  styleUrl: './task1-1.css',
  templateUrl: './task1-1.html',
})
export class Task11 {
  array = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
