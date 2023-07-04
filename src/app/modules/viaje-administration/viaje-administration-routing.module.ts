import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { ViajeDetailComponent } from './viaje-detail/viaje-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: "full"},
  {path: 'list', component: ViajeListComponent},
  {path: 'create', component: ViajeDetailComponent},
  {path: 'detail/:id', component: ViajeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajeAdministrationRoutingModule { }
