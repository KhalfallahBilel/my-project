import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TypeVolModule } from './type-vol/type-vol.module';
import { SliderModule } from './slider/slider.module';

import { VolsComponent } from './vols/vols.component';
import { CardInfModule } from './card-inf/card-inf.module';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SearchVolFormModule } from './search-vol-form/search-vol-form.module';
import { ResultSearchComponent } from './result-search/result-search.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ResultSearchModule } from './result-search/result-search.module';
import { RouteModule } from '../route/route.module';
import { ReservationModule } from './reservation/reservation.module';





@NgModule({
  imports: [
    CommonModule,TypeVolModule,SliderModule,CardInfModule, SearchVolFormModule, ResultSearchModule, RouteModule, ReservationModule
  ],
  declarations: [ContentComponent, VolsComponent, LoginComponent, SigninComponent,ResultSearchComponent],
  exports : [ContentComponent]
})
export class ContentModule { }
