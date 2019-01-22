import { Component, OnInit } from '@angular/core';
import { Reserva } from './Reserva';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html',
  styleUrls: ['./confirmar-reserva.component.css']
})
export class ConfirmarReservaComponent implements OnInit {
   public reserva: Reserva;
   public reservas: Array<Reserva>;

  constructor() {
   this.reserva = new Reserva("", "", "", "","");
     this.reservas = [
     ];
  }

  ngOnInit() {
  }
   onSubmit() {
     this.reservas.push(this.reserva);
   }
   

}
