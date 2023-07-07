import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ColectivoAdministrationRoutingModule } from './colectivo-administration-routing.module';
import { ColectivoListComponent } from './colectivo-list/colectivo-list.component';
import { ColectivoDetailComponent } from './colectivo-detail/colectivo-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ColectivoListComponent,
    ColectivoDetailComponent
  ],
  imports: [
    CommonModule,
    ColectivoAdministrationRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatButtonModule
    
  ]
})
export class ColectivoAdministrationModule { }
