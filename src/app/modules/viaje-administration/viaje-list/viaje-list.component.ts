import { Component } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent {


  displayedColumns = ['id', 'origen', 'destino', 'fechaLlegada', 'fechaSalida', 'colectivo', 'acciones'];
  dataSource = [
    new Viaje(1, 'Viedma', 'Patagones', '2023-06-29', '2023-06-29', 1, [0,2,5])
  ];

}
