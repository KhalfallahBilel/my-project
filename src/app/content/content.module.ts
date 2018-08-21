import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TypeVolModule } from './type-vol/type-vol.module';
import { SliderModule } from './slider/slider.module';

import { VolsComponent } from './vols/vols.component';
import { CardInfModule } from './card-inf/card-inf.module';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  imports: [
    CommonModule,TypeVolModule,SliderModule,CardInfModule
  ],
  declarations: [ContentComponent, VolsComponent, LoginComponent, SigninComponent],
  exports : [ContentComponent]
})
export class ContentModule { }
