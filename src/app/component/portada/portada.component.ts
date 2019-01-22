import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  //calendario y rating(corazones)
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`//rating(corazones)
,`
.star {
  font-size: 1.5rem;
  color: #b0c4de;
}
.filled {
  color: #1e90ff;
}
.bad {
  color: #deb0b0;
}
.filled.bad {
  color: #ff1e1e;
}
`
],


})
export class PortadaComponent implements OnInit {
  //carousel
  images = ['assets/img/hotelPrueba.jpg','assets/img/hotelPrueba2.jpg', 'assets/img/hotelPrueba3.jpg'];
  //calendario
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
  //Fin calendario
  
  //rating estrellas
  currentRate = 6;
  //Fin rating
  
  
  ngOnInit() {
  }

}
