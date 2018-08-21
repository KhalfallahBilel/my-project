import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolsComponent } from '../content/vols/vols.component';
import {  RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';


const routes :Routes = [
  {path:'vols',component: VolsComponent},
  {path:'',component: ContentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule { }
