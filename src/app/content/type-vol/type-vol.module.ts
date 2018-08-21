import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeVolComponent } from './type-vol.component';
import {TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,TabsModule.forRoot(),BsDatepickerModule.forRoot()
  ],
  declarations: [TypeVolComponent],
  exports : [TypeVolComponent]
})
export class TypeVolModule { }