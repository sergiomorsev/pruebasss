import { Component, OnInit } from '@angular/core';
import{ Registro } from './Registro';
@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent implements OnInit {
  public registro: Registro;
  public registros: Array<Registro>;

  constructor() {
    this.registro  = new Registro("","","","","");
    this.registros=[
    ];
   }

  ngOnInit() {
  }
  onSubmit() {
    this.registros.push(this.registro);
  }

}
