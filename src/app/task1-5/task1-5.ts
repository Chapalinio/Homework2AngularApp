import { Component } from '@angular/core';
import { PasswordHeshingPipe } from '../pipes/password-heshing-pipe';

@Component({
  imports: [PasswordHeshingPipe],
  selector: 'app-task1-5',
  styleUrl: './task1-5.css',
  templateUrl: './task1-5.html',
})
export class Task15 {
  password: string = "abcxyz"
}
