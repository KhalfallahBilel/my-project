import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SliderListComponent } from './slider-list/slider-list.component';

@NgModule({
  imports: [
    CommonModule,CarouselModule
  ],
  declarations: [SliderComponent, SliderListComponent],
  exports : [SliderComponent]
})
export class SliderModule { }
