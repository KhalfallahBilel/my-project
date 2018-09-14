import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassagerFormComponent } from './passager-form/passager-form.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { RouteModule } from '../../route/route.module';
import { PaiementComponent } from './paiement/paiement.component';
import { BilletComponent } from './billet/billet.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, TypeaheadModule, RouteModule
  ],
  declarations: [PassagerFormComponent, ReservationComponent, PaiementComponent, BilletComponent],
  exports : [ReservationComponent]
})
export class ReservationModule { }
