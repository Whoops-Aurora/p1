import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here (for two-way binding)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { New1Component } from './new1/new1.component';

@NgModule({
  declarations: [
    AppComponent,
    New1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    
  ],
  providers: [],
  bootstrap: [New1Component]
})
export class AppModule { }
