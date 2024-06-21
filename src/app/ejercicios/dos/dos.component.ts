import { Component } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {
  numero: number = 0;
  resultado: string = '';

  verificarParidad(): void {
    this.resultado = this.numero % 2 === 0 ? 'El número es par' : 'El número es impar';
  }
}
