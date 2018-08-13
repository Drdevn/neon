import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NeonMainComponent} from "./static/neon-main/neon-main.component";
import {ErrorPageComponent} from "./static/error-page/error-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NeonMainComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
