import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';

const routes: Routes = [
  {path: '', redirectTo:'person', pathMatch: 'full'},
  {
    path:'',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'person', 
        loadChildren: () => 
        import('./modules/person-administration/person-administration.module').then(mod => mod.PersonAdministrationModule)
      },
      {
        path: 'colectivos',
        loadChildren: () =>
        import('./modules/colectivo-administration/colectivo-administration.module').then(mod => mod.ColectivoAdministrationModule)
      },
      {
        path: 'viajes',
        loadChildren: () =>
        import('./modules/viaje-administration/viaje-administration.module').then(mod => mod.ViajeAdministrationModule)
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
