import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';


@NgModule({
  declarations: [PropertyListComponent, PropertyCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
