import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicio/habitacion.service';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaz/interefaz';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  heroes:Heroe[] = [];
  constructor(private _heroesService:HeroesService,
    private router:Router) { }

    ngOnInit() {
      this.heroes = this._heroesService.getHeroes();
      // console.log( this.heroes );
    }
    verHeroe( idx:number ){
      this.router.navigate( ['/heroe',idx] );
    }
}
