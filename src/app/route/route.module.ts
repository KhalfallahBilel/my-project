import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolsComponent } from '../content/vols/vols.component';
import {  RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { LoginComponent } from '../content/login/login.component';
import { SigninComponent } from '../content/signin/signin.component';


const routes :Routes = [
  {path:'vols',component: VolsComponent},
  {path:'',component: ContentComponent},
  {path:'login',component: LoginComponent},
  {path:'signin',component: SigninComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule { }
