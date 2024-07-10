import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Usuario } from '../../models/usuario.model';
import { map, tap } from 'rxjs';

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

  correo = null;

  constructor(
    private fb: FormBuilder,
    private servicioU: UsersService
  ) { }

  ngOnInit() {
    //!clase 3
    // this.form = this.fb.group({
    //   nombre: [''],
    //   correo: [''],
    //   contra: [''],
    //   idrol: [''],
    // });

    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      correo: ['',
        {
          validators: [Validators.required, Validators.minLength(5), this.esCorreoInvalido],
          asyncValidators: [this.validacionCorreo(this.servicioU)],
          updateOn: "blur"
        }],

      contra: ['', [Validators.required, Validators.minLength(8)]],
      idrol: ['', [Validators.required]],
      confirmacion: ['', [Validators.required]],
    }, {
      validators: [this.camposIguales('contra', 'confirmacion')]
    });





    this.servicioU.getRoles()
      .subscribe({
        next: (response) => {
          this.roles = response.roles;
        },
        // TODO: Manejar el error pendiente
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
          this.form.reset()
        }
      })
  }

  mensaje(campo: string) {
    let mensaje = "";
    if (this.form.get(campo)?.hasError('required')) {
      if (campo == "nombre") {
        mensaje = "El nombre es requerido..";
      }
      if (campo == "correo") {
        mensaje = "El correo es requerido..";
      }
      if (campo == "idrol") {
        mensaje = "El rol es requerido..";
      }
      if (campo == "contra") {
        mensaje = "La contraseña es requerida..";
      }

      if (campo == "confirmacion") {
        mensaje = "La confirmacion es requerida..";
      }


    }
    if (this.form.get(campo)?.hasError('minlength')) {
      if (campo == "contra") {
        mensaje = "La contrasena requiere 8 caracteres";
      }
    }
    if (this.form.get(campo)?.hasError('maxlength')) {
      if (campo == "nombre") {
        mensaje = "Nombre: max 200 caracteres";
      }
    }

    if (this.form.get(campo)?.hasError('esCorreoInvalido')) {
      mensaje = "Formato de correo incorrecto ";
    }

    if (this.form.get(campo)?.hasError('noIguales')) {
      mensaje = "Confirmacion incorrecta";
    }

    if (this.form.get(campo)?.hasError('estaHabilitado')) {
      mensaje = "Correo no se encuentra disponible";
    }

    return mensaje;
  }

  datoInvalido(campo: string) {
    return (this.form.get(campo)?.touched || this.form.get(campo)?.dirty) && this.form.get(campo)?.invalid;
  }

  esCorreoInvalido(control: AbstractControl) {
    let email = control.value;
    if (email) {
      let e = email.split("@");
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(email)) {
        return { esCorreoInvalido: true }
      }
      if (!/^[a-zA-Z().]+$/.test(e[1])) {
        return { esCorreoInvalido: true }
      }
    }
    return null;
  }

  camposIguales(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;
      if (pass1 !== pass2) {
        formGroup.get(field2)?.setErrors({ noIguales: true })
        return {
          noIguales: true
        }
      }
      //formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }

  validacionCorreo(service: UsersService) {
    return (control: AbstractControl) => {
      let nombre = control.value;
      return service.verificarCorreo(nombre)
        .pipe(
          tap((res:any) => {
            console.log('Validacion asincrona')
            console.log(res)
          }),
          map((response: { estaHabilitado: boolean }) => {
            // Verifica si el correo no se debe buscar en caso de edición
            if (this.correo != undefined && control.value == this.correo) {
              return null;
            }
            return response.estaHabilitado ? null : { estaHabilitado: true };
          })
        );
    }
  }


}
