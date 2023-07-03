import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{

  personList: Person[] = [];
  
  selectedPerson: Person  |  null = null;

  constructor(
    private personService : PersonService,
    private snackBar: MatSnackBar,
    private router: Router
    ){
  }

  ngOnInit(){
    this.loadPeople();
  }

  loadPeople() {
    this.personService.findAll().subscribe(res => {
      if (res.body)
        this.personList = res.body.map(json => new Person(json.id, json.age, json.name, json.lastName));
    }, error => {
      console.log("Ocurrio un error, Imposible!");
    });
  }

  seleccionarPersona(persona: Person){
    this.router.navigate(['person','detail', persona.id]);
  }

  crearPersona(){
    this.router.navigate(['person','create']);
  }

  borrarPersona(persona : Person){
    this.personService.borrar(persona.id).subscribe( res =>{
      this.snackBar.open("Se borro la persona correctamente", "Cerrar")
      this.router.navigate(['person', 'list'])
      this.loadPeople();
    }, error => {
      console.log(error);
      this.snackBar.open("Error intentando borrar persona", "Cerrar")
    });
  }


}
