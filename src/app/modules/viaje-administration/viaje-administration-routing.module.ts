import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViajeListComponent } from './viaje-list/viaje-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: "full"},
  {path: 'list', component: ViajeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajeAdministrationRoutingModule { }
