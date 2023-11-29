import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KLETECH';
  subtitle = 'Welcome to KLETECH';
  id=1;
  Name='Habibi';
  age=20;
  id1=2;
  Name1='Habibi1';
  age1=21;

  a:number=10;
  b:number=20;
  c:number;
  constructor(){
    console.log('Constructor is called');
    console.log("a");
    this.c=this.a+this.b;
  }
  add(){
    this.c=this.a+this.b+this.c;
  }
}
