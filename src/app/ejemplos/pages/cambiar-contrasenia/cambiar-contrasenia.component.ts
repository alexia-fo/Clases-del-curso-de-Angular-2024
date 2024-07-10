import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.component.html',
  styleUrl: './cambiar-contrasenia.component.css'
})
export class CambiarContraseniaComponent {
  form!: FormGroup;
  cargandoOp: boolean = false;
  idUsuario!: number;
  constructor(
    private fb: FormBuilder,
    private servicioU: UsersService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      contra: [''],
    });

    this.route.params
      .subscribe({
        next: (params) => {
          this.idUsuario = params['id'];
        }
        //TODO: por ahora no tiene manejo de errores
      });
  }

  guardar() {
    this.cargandoOp = true;
    let { contra = "" } = this.form.value;
    this.servicioU.updateContra(this.idUsuario, contra)
      .subscribe({
        next: (usuario: Usuario) => {
          console.log(usuario);
          this.cargandoOp = false;
        }
        //TODO: por ahora no tiene manejo de errores
      })
  }
}


