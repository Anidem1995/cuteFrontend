import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { ClientsComponent } from './pages/clients/clients.component';


@NgModule({
  declarations: [IndexComponent, CardComponent, ClientsComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class AdminPanelModule { }
