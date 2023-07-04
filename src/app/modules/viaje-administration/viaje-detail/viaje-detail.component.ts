import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Colectivo } from 'src/app/models/colectivo';
import { Modelo } from 'src/app/models/modelo';
import { Person } from 'src/app/models/person';
import { ColectivoService } from 'src/app/services/colectivo.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { PersonService } from 'src/app/services/person.service';

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
  });

  colectivoList: Colectivo[] = [];
  personList: Person[] = [];

  constructor(
    private fb: FormBuilder,
    private colectivoService: ColectivoService,
    private modeloService: ModeloService,
    private personService: PersonService,
    private matSnackBar: MatSnackBar
  
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
        console.log(error);
        this.matSnackBar.open(error, "Cerrar")
      })

      this.personService.findAll().subscribe(res => {
        if (res.body)
        this.personList = res.body.map(json => new Person(json.id, json.age, json.name, json.lastName));
      })
  }

  findModeloColectivo(colectivo: Colectivo){
    this.modeloService.findOne(colectivo.modeloId).subscribe( res=>
      colectivo.modelo = new Modelo(res.id, res.nombre, res.marca)  
    )
  }


  

}
