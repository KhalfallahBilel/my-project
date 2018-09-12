import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ContentModule } from './content/content.module';
import { CardInfListService } from './service/card-inf-list.service';
import { RouteModule } from './route/route.module';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,NavBarModule,ContentModule,RouteModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [CardInfListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
