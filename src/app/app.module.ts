import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ContentModule } from './content/content.module';
import { CardInfListService } from './service/card-inf-list.service';
import { RouteModule } from './route/route.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,NavBarModule,ContentModule,RouteModule
  ],
  providers: [CardInfListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
