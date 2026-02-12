import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePacientes } from './detalle-pacientes';

describe('DetallePacientes', () => {
  let component: DetallePacientes;
  let fixture: ComponentFixture<DetallePacientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePacientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePacientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
