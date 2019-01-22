import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHuespedComponent } from './eliminar-huesped.component';

describe('EliminarHuespedComponent', () => {
  let component: EliminarHuespedComponent;
  let fixture: ComponentFixture<EliminarHuespedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarHuespedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
