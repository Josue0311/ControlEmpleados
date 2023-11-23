import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNuevoEmpleadoComponent } from './registro-nuevo-empleado.component';

describe('RegistroNuevoEmpleadoComponent', () => {
  let component: RegistroNuevoEmpleadoComponent;
  let fixture: ComponentFixture<RegistroNuevoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroNuevoEmpleadoComponent]
    });
    fixture = TestBed.createComponent(RegistroNuevoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
