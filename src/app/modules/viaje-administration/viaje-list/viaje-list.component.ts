import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { ColectivoService } from 'src/app/services/colectivo.service';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent implements OnInit {

  displayedColumns = ['id', 'origen', 'destino', 'fechaLlegada', 'fechaSalida', 'colectivo', 'acciones'];
  dataSource = [
    new Viaje(1, 'Viedma', 'Patagones', '2023-06-29', '2023-06-29', 1, [0,2,5])
  ];

  constructor(private viajeService: ViajeService,
    private colectivoService: ColectivoService,
    private router: Router,
    private snackBar: MatSnackBar){}


  ngOnInit() {
    this.loadViajes();
  }

  loadViajes(){
    this.viajeService.findAll().subscribe(res => {
      this.dataSource = res.body.map(res => {
        const viaje = new Viaje(res.id, res.lugarSalida, res.lugarDestino, res.fechaSalida ,res.fechaLlegada, res.idColectivo, res.pasajeros)
        this.loadColectivo(viaje);
        return viaje;
      })
    })
  }

  loadColectivo(viaje: Viaje){
    this.colectivoService.findOne(viaje.idColectivo).subscribe( res =>{
      viaje.colectivo = res;
    })
  }

  crearViaje() {
    this.router.navigate(['viajes','create']);
  }
  
  seleccionarViaje(viaje: Viaje) {
    this.router.navigate(['viajes', 'detail', viaje.id]);
  }
  
  borrarViaje(viaje: Viaje) {
    this.viajeService.borrarViaje(viaje.id).subscribe(res => {
      this.snackBar.open("Se borro al viaje correctamente", "Cerrar", {"duration": 4000})
      this.router.navigate(['viajes', 'list'])
      this.loadViajes();
  }, error => {
    this.snackBar.open("Error intentando borrar un viaje", "Cerrar", {"duration": 4000})
  });
  }

}
