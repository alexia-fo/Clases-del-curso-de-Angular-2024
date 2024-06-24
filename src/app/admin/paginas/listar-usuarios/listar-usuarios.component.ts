import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {
  usuarios:Usuario[]=[
    {
      id:1,
      nombre:"Alexia",
      correo:"alexia@gmail.com",
      estado:true
    },
    {
      id:2,
      nombre:"Carlos",
      correo:"carlos@gmail.com",
      estado:false
    }
  ]
}
