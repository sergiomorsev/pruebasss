import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSesionComponent } from './registro-sesion.component';

describe('RegistroSesionComponent', () => {
  let component: RegistroSesionComponent;
  let fixture: ComponentFixture<RegistroSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
