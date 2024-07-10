import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../ejemplos/services/users.service';
import { switchMap, tap } from 'rxjs';

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
  roles: any = [{ id: 1, rol: "Admin" }, {
    id: 2,
    rol: "Vendedor"
  }];

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
    this.route.params
      .pipe(
        switchMap(params => {
          this.idUsuario = params['id'];
          return this.servicioU.getUsuario(this.idUsuario);
        }),
      )
      .subscribe({
        next: (usuario: Usuario) => {
          this.form.patchValue(usuario);
        },
        error:(error)=>{
          console.log(error)
        }
        //TODO: por ahora no tiene manejo de errores
      });


      // this.route.params
      // .subscribe({
      //   next:(params:any)=>{
      //     this.idUsuario=params['id']
      //   }
      // })

      // this.servicioU.getUsuario(this.idUsuario)
      // .subscribe({
      //   next:(usuario:Usuario)=>{

      //   }
      // })
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
