import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuenta } from './form-cuenta';

describe('FormCuenta', () => {
  let component: FormCuenta;
  let fixture: ComponentFixture<FormCuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCuenta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCuenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
