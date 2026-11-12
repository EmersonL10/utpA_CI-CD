import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})

export class Registro {
  mensaje = '' ;

  registrar(event: Event): void {
    event.preventDefault();
    this.mensaje = 'Registro valido';
  }
}
