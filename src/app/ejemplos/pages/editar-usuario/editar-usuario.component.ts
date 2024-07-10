import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin, switchMap } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  idUsuario!: number;
  form!: FormGroup;
  cargandoOp: Boolean = false;

  //FIXME:temporal - consultar roles a api
  roles: any = [];//{ id: 1, rol: "Admin" }, { id: 2, rol: "Vendedor" }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private servicioU: UsersService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: [''],
      correo: [''],
      idrol: [''],
    });


    //!clase 3
    // this.route.params
    //   .pipe(
    //     switchMap(params => {
    //       this.idUsuario = params['id'];
    //       return this.servicioU.getUsuario(this.idUsuario);
    //     })
    //   )
    //   .subscribe({
    //     next: (usuario: Usuario) => {
    //       this.form.patchValue(usuario);
    //     }
    //     //TODO: por ahora no tiene manejo de errores
    //   });

    //!clase 4

    this.route.params
    .pipe(
      switchMap(params => {
        this.idUsuario = params['id'];
        return forkJoin({
          usuario: this.servicioU.getUsuario(this.idUsuario),
          roles: this.servicioU.getRoles()
        });
      })
    )
    .subscribe({
      next: ({ usuario, roles }) => {
        this.form.patchValue(usuario);
        this.roles = roles.roles;
      },
      //TODO: todavia no tiene manejo de errores
    });
  }

  guardar() {
    let { ...usuario } = this.form.value;
    this.servicioU.updateUsuario(this.idUsuario, usuario)
      .subscribe({
        next: (res: Usuario) => {
          console.log(res);
          this.cargandoOp = false;
        }
      });
  }

}
