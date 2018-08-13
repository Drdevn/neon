import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeonMainComponent} from "./static/neon-main/neon-main.component";
import {ErrorPageComponent} from "./static/error-page/error-page.component";

const routes: Routes = [

  {
    path: '',
    component: NeonMainComponent,
  },


  {
    path: '**',
    component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
