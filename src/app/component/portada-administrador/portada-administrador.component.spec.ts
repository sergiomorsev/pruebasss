import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaAdministradorComponent } from './portada-administrador.component';

describe('PortadaAdministradorComponent', () => {
  let component: PortadaAdministradorComponent;
  let fixture: ComponentFixture<PortadaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
