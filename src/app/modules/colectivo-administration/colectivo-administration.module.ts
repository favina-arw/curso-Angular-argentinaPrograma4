import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectivoAdministrationRoutingModule } from './colectivo-administration-routing.module';
import { ColectivoListComponent } from './colectivo-list/colectivo-list.component';


@NgModule({
  declarations: [
    ColectivoListComponent
  ],
  imports: [
    CommonModule,
    ColectivoAdministrationRoutingModule
  ]
})
export class ColectivoAdministrationModule { }
