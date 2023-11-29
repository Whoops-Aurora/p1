import { Component } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrl: './new1.component.css'
})
export class New1Component {
  fname: string = 'John';
  lname: string = 'Doe';
  age: number = 30;
}
