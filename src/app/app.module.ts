import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here (for two-way binding)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    AppComponent,
    New1Component,
    New2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    
  ],
  providers: [DisplayService],
  bootstrap: [New2Component]
})
export class AppModule { }
