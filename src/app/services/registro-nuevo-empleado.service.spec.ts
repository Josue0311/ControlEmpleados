import { TestBed } from '@angular/core/testing';

import { RegistroNuevoEmpleadoService } from './registro-nuevo-empleado.service';

describe('RegistroNuevoEmpleadoService', () => {
  let service: RegistroNuevoEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroNuevoEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
