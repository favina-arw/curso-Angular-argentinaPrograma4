import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ViajeAdministrationRoutingModule } from './viaje-administration-routing.module';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ViajeDetailComponent } from './viaje-detail/viaje-detail.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ViajeListComponent,
    ViajeDetailComponent
  ],
  imports: [
    CommonModule,
    ViajeAdministrationRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatOptionModule

  ]
})
export class ViajeAdministrationModule { }
