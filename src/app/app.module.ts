import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelektorComponent } from './selektor/selektor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterial} from "./angular-material";
import {MatSliderModule} from "@angular/material/slider";
import {MomentPipe} from "./sheard/moment.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelektorComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterial,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
