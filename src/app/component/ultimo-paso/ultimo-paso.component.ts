import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Ultimo } from './ultimo';
import * as cardValidator from 'card-validator';
@Component({
  selector: 'app-ultimo-paso',
  templateUrl: './ultimo-paso.component.html',
  styleUrls: ['./ultimo-paso.component.css']
})
export class UltimoPasoComponent implements OnInit {

  public ultimo: Ultimo;
  public Ultimos: Array<Ultimo>;
  
  public type:any | 'any';
  public cardnumber:any;
  public cardnum:any = '';
  public mask = {
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
           /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
           /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
           /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  }

  constructor() {
    this.ultimo = new Ultimo("", "", "", "");
    this.Ultimos = [
    ];
  }

  ngOnInit() {
  }
  onSubmit() {
    this.Ultimos.push(this.ultimo);
  }

  envio() {

    swal("Formulario de contacto", "Mensaje enviado correctamente", "success");
  }
  updateCard() {
    this.cardnumber = this.cardnum.split(/[\_\s]+/ig).join('');
    this.type = cardValidator.number(this.cardnumber);
  }
}
