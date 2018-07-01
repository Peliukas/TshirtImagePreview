import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlickModule} from 'ngx-slick';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SlickModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
