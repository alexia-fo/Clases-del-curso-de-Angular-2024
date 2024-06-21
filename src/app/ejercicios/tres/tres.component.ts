import { Component } from '@angular/core';
export interface Persona {
  nombre: string;
  edad: number;
}

export function saludar(persona: Persona): string {
  const { nombre, edad } = persona;
  return `Hola, ${nombre}. Tienes ${edad} años.`;
}

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrl: './tres.component.css'
})
export class TresComponent {
  persona: Persona = { nombre: 'Alexia', edad: 23 };
  mensaje: string = '';

  mostrarSaludo(): void {
    this.mensaje = saludar(this.persona);
  }
}
