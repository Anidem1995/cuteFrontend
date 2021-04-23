import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminPanelModule } from './modules/admin-panel/admin-panel.module';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
