import { Component } from '@angular/core';
import { RespUsuarios, ResUsuarioDelete, Usuario } from '../../models/usuario.model';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [];
  constructor(
    private servicioU: UsersService
  ) { }
  ngOnInit() {
    //!clase 3
    // this.servicioU.getUsuarios()
    //   .subscribe({
    //     next: (res: RespUsuarios) => {
    //       this.usuarios = res.usuarios;
    //       console.log(this.usuarios)
    //     }
    //   })

    //!clase 4
    this.cargarUsuarios();
  }

  eliminar(id: number) {
    this.servicioU.deleteUsuario(id)
      .subscribe({
        next: (res: ResUsuarioDelete) => {
          this.cargarUsuarios();
        }
      })
  }

  cargarUsuarios() {
    this.servicioU.getUsuarios()
      .subscribe({
        next: (res: RespUsuarios) => {
          this.usuarios = res.usuarios;
          console.log(this.usuarios)
        },
        error: (error) => {
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
