import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfComponent } from './card-inf.component';
import { CardInfListComponent } from './card-inf-list/card-inf-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardInfComponent, CardInfListComponent],
  exports : [CardInfComponent]
})
export class CardInfModule { }
