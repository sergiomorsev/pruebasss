import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoPasoComponent } from './ultimo-paso.component';

describe('UltimoPasoComponent', () => {
  let component: UltimoPasoComponent;
  let fixture: ComponentFixture<UltimoPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
