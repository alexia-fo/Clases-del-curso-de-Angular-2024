import { Component } from '@angular/core';
import { RespUsuarios, ResUsuarioDelete, Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'

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
    this.cargarUsuarios()
  }

  eliminar(id: number) {
    this.servicioU.deleteUsuario(id)
      .subscribe({
        next: (res: ResUsuarioDelete) => {
          this.cargarUsuarios();
        }
      })
  }

  cargarUsuarios(){
    this.servicioU.getUsuarios()
      .subscribe({
        next: (res: RespUsuarios) => {
          this.usuarios = res.usuarios;
          console.log(this.usuarios)
        },
        error:(error)=>{
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          // footer: '<a href="#">Why do I have this issue?</a>'
          });
        }

      })
  }

}
