import { Component } from '@angular/core';

@Component({
  selector: 'app-newc2',
  templateUrl: './new2.component.html',
  styleUrl: './new2.component.css'
})
export class New2Component {
user:string="";
pass:string="";
cred:any;
i:number=0;
msg:string="";
constructor(){
  this.cred=[{username:"Poorva",password:"poo"},
              {username:"Saachi",password:"saa"},
              {username:"Supriya",password:"sup"},
              {username:"Ganesh",password:"gan"}];
}
validate(){

  for(this.i=0;this.i<4;this.i++){
    if(this.user==this.cred[this.i].username && this.pass==this.cred[this.i].password)
    {
      this.msg="Valid User";
      break;
    }
    else{
      this.msg="Invalid User";
      break;
    }
  }
}
}