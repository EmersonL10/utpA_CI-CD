import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registro } from './registro';

describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro],
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('muestra una confirmación al procesar el envío', () => {
  const evento = new Event('submit', { cancelable: true });

  component.registrar(evento);

  expect(component.mensaje).toBe('Registro valido');
});

it('cancela el envio predeterminado del formulario', () => {
  const evento = new Event('submit', { cancelable: true });

  component.registrar(evento);

  expect(evento.defaultPrevented).toBe(true);
});

it('detecta que falta el correo obligatorio', () => {
  const pantalla = fixture.nativeElement as HTMLElement;
  const correo = pantalla.querySelector<HTMLInputElement>('#email');

  expect(correo?.validity.valueMissing).toBe(true);
});

it('detecta un correo con formato incorrecto', () => {
  const pantalla = fixture.nativeElement as HTMLElement;
  const correo = pantalla.querySelector<HTMLInputElement>('#email');

  if (!correo) {
    throw new Error('No se encontró el campo de correo');
  }

  correo.value = 'emerson';

  expect(correo.validity.typeMismatch).toBe(true);
});

});
