import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchVolFormComponent } from './search-vol-form.component';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { TabsModule, BsDatepickerModule } from '../../../../node_modules/ngx-bootstrap';
import { SearchAirportComponent } from './search-airport/search-airport.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';



@NgModule({
  imports: [
    CommonModule, FormsModule, TabsModule, BsDatepickerModule, ReactiveFormsModule, TypeaheadModule
  ],
  declarations: [SearchVolFormComponent, SearchAirportComponent],
  exports : [SearchVolFormComponent]
})
export class SearchVolFormModule { }
