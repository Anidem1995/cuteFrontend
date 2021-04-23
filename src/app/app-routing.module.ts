import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/admin-panel/pages/index/index.component';
import { CoreModule } from './modules/core/core.module';
import { PropertyListComponent } from './modules/home/pages/property-list/property-list.component';

const routes: Routes = [
  { path: 'agent', component: IndexComponent},
  { path: 'properties', component: PropertyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
