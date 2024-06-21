import { Component } from '@angular/core';

@Component({
  selector: 'app-cuatro',
  templateUrl: './cuatro.component.html',
  styleUrl: './cuatro.component.css'
})
export class CuatroComponent {
  entrada: string = '';
  primerElemento: number | null = null;

  obtenerPrimerElemento<T>(arreglo: T[]): T {
    return arreglo[0];
  }

  mostrarPrimerElemento(): void {
    const numeros = this.entrada.split(',').map(num => parseFloat(num));
    this.primerElemento = this.obtenerPrimerElemento<number>(numeros);
  }
}
