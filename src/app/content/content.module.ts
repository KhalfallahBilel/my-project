import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TypeVolModule } from './type-vol/type-vol.module';
import { SliderModule } from './slider/slider.module';

import { VolsComponent } from './vols/vols.component';
import { CardInfModule } from './card-inf/card-inf.module';
import { VolsModule } from './vols/vols.module';



@NgModule({
  imports: [
    CommonModule,TypeVolModule,SliderModule,CardInfModule
  ],
  declarations: [ContentComponent, VolsComponent],
  exports : [ContentComponent]
})
export class ContentModule { }
