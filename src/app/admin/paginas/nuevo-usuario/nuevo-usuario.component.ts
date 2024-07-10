import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  form!: FormGroup;
  //FIXME:temporal - consultar roles a api
  roles: any = [{ id: 1, rol: "Admin" }, { id: 2, rol: "Vendedor" }];
  cargandoOp: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private servicioU: UsuarioService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: [''],
      correo: [''],
      contra: [''],
      idrol: [''],
    });
  }
  guardar() {
    this.cargandoOp = true;
    let { ...usuario } = this.form.value;
    // console.log(usuario)
    this.servicioU.postUsuario(usuario)
      .subscribe({
        next: (res: Usuario) => {
          console.log(res);
          this.cargandoOp = false;
        },
        error:(error)=>{
          console.log(error)
          this.cargandoOp=false;
        }
      })

  }
}
