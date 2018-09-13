import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolsComponent } from '../content/vols/vols.component';
import {  RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { LoginComponent } from '../content/login/login.component';
import { SigninComponent } from '../content/signin/signin.component';
import { ReservationComponent } from '../content/reservation/reservation.component';
import { ReservationResolverService } from '../resolver/reservation-resolver.service';
import { PassagerFormComponent } from '../content/reservation/passager-form/passager-form.component';


const routes :Routes = [
  /* {path:'vols',component: VolsComponent}, */
  {path:'',component: ContentComponent},
  {path:'login',component: LoginComponent},
  {path:'signin',component: SigninComponent},
  { path: "vols/:id", component: ReservationComponent,
            resolve : {
              vol :ReservationResolverService
            }},
  {path:'vols/:id/passagerForm',component: PassagerFormComponent},          
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModule { }
