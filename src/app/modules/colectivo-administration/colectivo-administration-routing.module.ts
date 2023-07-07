import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColectivoListComponent } from './colectivo-list/colectivo-list.component';
import { ColectivoDetailComponent } from './colectivo-detail/colectivo-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: "full"},
  {path: 'list', component: ColectivoListComponent},
  {path: 'create', component: ColectivoDetailComponent},
  {path: 'detail/:id', component: ColectivoDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectivoAdministrationRoutingModule { }
