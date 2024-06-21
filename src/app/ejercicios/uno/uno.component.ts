import { Component } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {
  numeros: number[] = [1, 2, 3, 4, 5];
  suma: number = 0;

  calcularSuma(): void {
    this.suma = this.numeros.reduce((acc, num) => acc + num, 0);
  }
}
