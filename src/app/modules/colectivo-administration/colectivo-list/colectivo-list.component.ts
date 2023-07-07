import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Colectivo } from 'src/app/models/colectivo';
import { Modelo } from 'src/app/models/modelo';
import { ColectivoService } from 'src/app/services/colectivo.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-colectivo-list',
  templateUrl: './colectivo-list.component.html',
  styleUrls: ['./colectivo-list.component.css']
})
export class ColectivoListComponent implements OnInit {
  
  constructor(private colectivoService: ColectivoService,
    private modeloService: ModeloService,
    private matSnackBar: MatSnackBar,
    private router: Router){}
  
  ngOnInit(){
    this.loadColectivos();
  }

  displayedColumns = ['id', 'patente', 'cantidadAsientos', 'idModeloNombre', 'idModelo', 'acciones'];
  dataSource = [];

  loadColectivos() {
    this.colectivoService.findAll().subscribe( respuesta => {
      this.dataSource = respuesta.body.map(res =>{
      const colectivo = new Colectivo(res.id, res.patente, res.cantidadAsientos, res.modeloId)
      this.findModeloColectivo(colectivo);
      return colectivo;
      })
    }, error => {
      //console.log(error);
      this.matSnackBar.open("Error al cargar Colectivos", "Cerrar", {"duration": 4000});
      this.router.navigate(['colectivos','list'])
    })
  }

  findModeloColectivo(colectivo: Colectivo){
    this.modeloService.findOne(colectivo.modeloId).subscribe( res=>
      colectivo.idModelo = new Modelo(res.id, res.nombre, res.marca)  
    )
  }

  borrarColectivo(id: number) {
    this.colectivoService.borrarColectivo(id).subscribe( res => {
      this.matSnackBar.open("Se borro correctame el colectivo", "Cerrar", {"duration": 4000});
      this.router.navigate(['colectivos', 'list']);
      this.loadColectivos();
    }, error => {
      //console.log(error);
      this.matSnackBar.open("No se puede borrar un Colectivo con, al menos, un viaje asignado", "Cerrar", {"duration": 4000});
    })
  }
  
  seleccionarColectivo(colectivo: Colectivo) {
    this.router.navigate(['colectivos','detail', colectivo.id]);
  }
  
  agregarColectivo() {
    this.router.navigate(['colectivos','create']);
  }

}


