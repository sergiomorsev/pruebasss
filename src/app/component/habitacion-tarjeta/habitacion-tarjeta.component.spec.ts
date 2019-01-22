import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionTarjetaComponent } from './habitacion-tarjeta.component';

describe('HabitacionTarjetaComponent', () => {
  let component: HabitacionTarjetaComponent;
  let fixture: ComponentFixture<HabitacionTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacionTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
