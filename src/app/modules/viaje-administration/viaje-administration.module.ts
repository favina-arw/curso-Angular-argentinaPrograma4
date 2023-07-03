import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajeAdministrationRoutingModule } from './viaje-administration-routing.module';
import { ViajeListComponent } from './viaje-list/viaje-list.component';


@NgModule({
  declarations: [
    ViajeListComponent
  ],
  imports: [
    CommonModule,
    ViajeAdministrationRoutingModule
  ]
})
export class ViajeAdministrationModule { }
