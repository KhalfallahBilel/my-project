import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeVolComponent } from './type-vol.component';
import {TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SearchVolFormModule } from '../search-vol-form/search-vol-form.module';






@NgModule({
  imports: [
    CommonModule,TabsModule.forRoot(),BsDatepickerModule.forRoot(), TypeaheadModule.forRoot(), SearchVolFormModule
  ],
  declarations: [TypeVolComponent],
  exports : [TypeVolComponent]
})
export class TypeVolModule { }