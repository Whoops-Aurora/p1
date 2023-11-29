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
  city:Array<string> = ['Mumbai', 'Pune', 'Delhi'];
  constructor() { 
    console.log('New1Component created');
    this.city.push('Chennai');
    console.log(this.city+'chennai pushed to city array');
  }
}
