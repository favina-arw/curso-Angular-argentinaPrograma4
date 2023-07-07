import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Colectivo } from 'src/app/models/colectivo';
import { Modelo } from 'src/app/models/modelo';
import { Person } from 'src/app/models/person';
import { Viaje } from 'src/app/models/viaje';
import { ColectivoService } from 'src/app/services/colectivo.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { PersonService } from 'src/app/services/person.service';
import { ViajeDTO, ViajeService } from 'src/app/services/viaje.service';


@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit{

  tripForm = this.fb.group({
    origen: ['', Validators.required],
    destino: ['', Validators.required],
    fechaLlegada: [new Date(), Validators.required],
    fechaSalida: [new Date(), Validators.required],
    colectivo: [0, Validators.required],
    pasajeros: [[], Validators.required]
  })

  colectivoList: Colectivo[] = [];
  personList: Person[] = [];
  
  selectedViaje: Viaje;

  constructor(
    private fb: FormBuilder,
    private colectivoService: ColectivoService,
    private modeloService: ModeloService,
    private personService: PersonService,
    private matSnackBar: MatSnackBar,
    private viajeService: ViajeService,
    private router: Router,
    private route: ActivatedRoute
  
  ){}


  ngOnInit(){

    this.colectivoService.findAll().subscribe( res => {
      if (res.body)
        this.colectivoList = res.body.map(json => {
          const bondi = new Colectivo(json.id, json.patente, json.cantidadAsientos, json.modeloId);
          this.findModeloColectivo(bondi); 
          return bondi;
        })
      }, error => {
        //console.log(error);
        this.matSnackBar.open("Error al cargar lista de Colectivos", "Cerrar", {"duration": 4000})
      })

      this.personService.findAll().subscribe(res => {
        if (res.body)
        this.personList = res.body.map(json => new Person(json.id, json.age, json.name, json.lastName));
      }, error => {
        //console.log(error);
        this.matSnackBar.open("Error al cargar lista de Personas", "Cerrar", {"duration": 4000})
      })

      this.route.paramMap.subscribe(params => {
        const id = params.get("id");
        //console.log("el id que estoy editando es: " + id);
        if (id){
          // @ts-ignore
          this.findViaje(Number(id));
        }
      })
  }

  findViaje(id: number){
    this.viajeService.findOne(id).subscribe(res => {
        this.selectedViaje = res;

        this.tripForm.patchValue({
          origen: res.lugarSalida,
          destino: res.lugarDestino,
          fechaLlegada: new Date(res.fechaLlegada),
          fechaSalida: new Date(res.fechaSalida),
          colectivo: res.idColectivo,
        })
        
        // @ts-ignore
        this.tripForm.get('pasajeros').setValue(res.personaId);
    }, error => {
      //console.log(error);
      this.matSnackBar.open("No se pudo cargar el Viaje elejido", "Cerrar", {"duration": 4000});
      this.router.navigate(['viajes', 'list']);
    })
  }

  findModeloColectivo(colectivo: Colectivo){
    this.modeloService.findOne(colectivo.modeloId).subscribe( res=>
      colectivo.idModelo = new Modelo(res.id, res.nombre, res.marca)  
    )
  }

  guardarCambios() {
    
    const pasajeros: number[] = this.tripForm.get('pasajeros').value
    
    const body: ViajeDTO = {
      lugarSalida: this.tripForm.get('origen').value,
      lugarDestino: this.tripForm.get('destino').value,
      fechaLlegada: this.tripForm.get('fechaLlegada').value,
      fechaSalida: this.tripForm.get('fechaSalida').value,
      idColectivo: this.tripForm.get('colectivo').value,
      pasajeros: pasajeros
    }

    if(this.selectedViaje && this.selectedViaje.id){
      
      console.log("Actualizando un viaje");

      body.id = this.selectedViaje.id;

      this.viajeService.actualizarViaje(body).subscribe( res => {
        this.matSnackBar.open("Se guardaron los cambios correctamente", "Cerrar", {"duration": 4000});
        this.router.navigate(['viajes', 'list'])
      }, error => {
        //console.log(error);
        this.matSnackBar.open("Error al actualizar el viaje", "Cerrar", {"duration": 4000});
      });
      
    }else{
      //console.log("Creando un viaje");

      this.viajeService.crearViaje(body).subscribe( res => {
        this.matSnackBar.open("Se creo el viaje correctamente", "Cerrar", {"duration": 4000});
        this.router.navigate(['viajes', 'list'])
      }, error => {
        //console.log(error);
        this.matSnackBar.open("Error al crear el viaje", "Cerrar", {"duration": 4000});
      });
    }
  }

  volverAtras() {
    this.router.navigate(['viajes', 'list']);
  }
  

}
