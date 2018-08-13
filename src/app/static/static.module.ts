import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonMainComponent } from './neon-main/neon-main.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NeonMainComponent, ErrorPageComponent]
})
export class StaticModule { }
