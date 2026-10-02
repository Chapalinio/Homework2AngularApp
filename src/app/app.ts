import { Component, signal } from '@angular/core';
import { Task11 } from './task1-1/task1-1';
import { Task15 } from './task1-5/task1-5';
import { Task22 } from './task2-2/task2-2';
import { Task31 } from './task3-1/task3-1';

@Component({
  imports: [Task11, Task15, Task22, Task31],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('homework2AngularApp');
}
