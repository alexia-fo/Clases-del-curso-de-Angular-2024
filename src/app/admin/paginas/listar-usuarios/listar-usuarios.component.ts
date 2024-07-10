import { Component } from '@angular/core';
import { RespUsuarios, Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {
  usuarios: Usuario[] = []

  constructor(
    private servicioU: UsuarioService
  ) { }

  ngOnInit() {
    this.servicioU.getUsuarios()
    .subscribe({
      next:(res:RespUsuarios)=>{
        this.usuarios=res.usuarios;
        console.log(this.usuarios)
      }
    })
  }

}
