import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassagerFormComponent } from './passager-form/passager-form.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { RouteModule } from '../../route/route.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, TypeaheadModule, RouteModule
  ],
  declarations: [PassagerFormComponent, ReservationComponent],
  exports : [ReservationComponent]
})
export class ReservationModule { }
