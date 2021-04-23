import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PropertyListComponent, PropertyCardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [PropertyCardComponent]
})
export class HomeModule { }
