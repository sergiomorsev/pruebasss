import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  images = ['assets/img/hotelPrueba.jpg','assets/img/habitacionFotos.jpg', 'assets/img/gym.jpg'];
  imagesGym = ['assets/img/gym.jpg','assets/img/piscina2.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
