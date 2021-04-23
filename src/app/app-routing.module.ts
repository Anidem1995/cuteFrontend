import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/admin-panel/pages/index/index.component';
import { CoreModule } from './modules/core/core.module';

const routes: Routes = [
  { path: 'agent', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
