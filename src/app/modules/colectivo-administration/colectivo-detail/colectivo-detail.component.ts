import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Colectivo } from 'src/app/models/colectivo';
import { Modelo } from 'src/app/models/modelo';
import { ColectivoDTO, ColectivoService } from 'src/app/services/colectivo.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-colectivo-detail',
  templateUrl: './colectivo-detail.component.html',
  styleUrls: ['./colectivo-detail.component.css']
})
export class ColectivoDetailComponent implements OnInit{

  constructor(
    private modeloService: ModeloService,
    private route: ActivatedRoute,
    private colectivoService: ColectivoService,
    private fb: FormBuilder,
    private router: Router,
    private matSnackBar: MatSnackBar
  ){}

  ngOnInit() {
    
    this.route.paramMap.subscribe( params => {
      const id = params.get("id");
      //console.log("el id que estoy editando es: " + id);
      if(id){
        this.findColectivo(Number(id))
      }
    })

    this.modeloService.findAll().subscribe( res => {
      if(res.body)
        this.modeloList = res.body.map( json => {
          const modelo = new Modelo(json.id, json.nombre, json.marca)
          return modelo;
        })
    }, error => {
      //console.log(error);
      this.matSnackBar.open("Error al cargar los modelos", "Cerrar", {"duration": 4000})
    })
    
  }

  colectivoForm = this.fb.group({
    patente: ['', Validators.required],
    cantidadAsientos:[0, Validators.required],
    modeloId:[0, Validators.required]
  })

  modeloList: Modelo[] = [];
  selectedColectivo: Colectivo; 

  findColectivo(id: number) {
    this.colectivoService.findOne(id).subscribe( res => {
      this.selectedColectivo = new Colectivo(res.id, res.patente, res.cantidadAsientos, res.modeloId); 
      this.findModeloColectivo(this.selectedColectivo)

      this.colectivoForm.patchValue({
        patente: this.selectedColectivo.patente,
        cantidadAsientos: this.selectedColectivo.cantidadAsientos,
        modeloId: this.selectedColectivo.modeloId
      })
    }, error => {
      //console.log(error);
      this.matSnackBar.open("Error al cargar Colectivo", "Cerrar", {"duration": 4000});
      this.router.navigate(['colectivos', 'list']);
    });
  }

  findModeloColectivo(colectivo: Colectivo){
    this.modeloService.findOne(colectivo.modeloId).subscribe( res =>
      colectivo.idModelo = new Modelo(res.id, res.nombre, res.marca)
    )
  }

  guardarCambios() {
    
    const body: ColectivoDTO = {
      patente: this.colectivoForm.get('patente').value,
      cantidadAsientos: this.colectivoForm.get('cantidadAsientos').value,
      idModelo: null,
      modeloId: this.colectivoForm.get('modeloId').value
    }

    if(this.selectedColectivo && this.selectedColectivo.id){
      
      //console.log("Actualizando un colectivo");

      body.id = this.selectedColectivo.id;

      this.colectivoService.actualizarColectivo(body).subscribe( res => {
        this.matSnackBar.open("Se guardaron los cambios correctamente", "Cerrar", {"duration": 4000});
        this.router.navigate(['colectivos', 'list'])
      }, error => {
        //console.log(error);
        this.matSnackBar.open("Error al actualizar informacion del Colectivo", "Cerrar", {"duration": 4000});
      });
      
    }else{
      //console.log("Creando un colectivo");

      this.colectivoService.crearColectivo(body).subscribe( res => {
        this.matSnackBar.open("Colectivo creado correctamente", "Cerrar", {"duration": 4000});
        this.router.navigate(['colectivos', 'list'])
      }, error => {
        //console.log(error);
        this.matSnackBar.open("Error al crear Colectivo", "Cerrar", {"duration": 4000});
      });
    }
  }

  volverAtras(){
    this.router.navigate(['colectivos', 'list']);
  }
}
