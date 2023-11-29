import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [New1Component]
})
export class AppModule { }
