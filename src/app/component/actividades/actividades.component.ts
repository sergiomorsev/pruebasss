import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  images = ['assets/img/hotelPrueba.jpg']; 
  imagesExcursion = ['assets/img/excursion1.jpg','assets/img/excursion3.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
