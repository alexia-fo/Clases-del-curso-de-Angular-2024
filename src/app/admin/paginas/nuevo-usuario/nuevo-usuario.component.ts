import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { RespRoles, Rol } from '../../models/rol.model';
import { map, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  form!: FormGroup;
  //FIXME:temporal - consultar roles a api
  roles: Rol[] = [];
  cargandoOp: Boolean = false;
  correo=null;


  constructor(
    private fb: FormBuilder,
    private servicioU: UsuarioService
  ) { }

  ngOnInit() {
    // this.form = this.fb.group({
    //   nombre: ['', ],
    //   correo: [''],
    //   contra: [''],
    //   idrol: [''],
    // });


    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      correo: ['', [Validators.required, this.esCorreoInvalido], [this.validacionCorreo(this.servicioU)]],
      contra: ['', [Validators.required, Validators.minLength(8)]],
      idrol: ['', [Validators.required]],
      confirmacion: ['', [Validators.required]],
    }, {
      validators: [this.camposIguales('contra', 'confirmacion')]
    });


    this.servicioU.getRoles()
      .subscribe({
        next: (response: RespRoles) => {
          this.roles = response.roles;
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
  guardar() {

    if(this.form.pending){
      console.log('Validacion en proceso');
      return;
    }

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    this.cargandoOp = true;
    let { ...usuario } = this.form.value;
    // console.log(usuario)
    this.servicioU.postUsuario(usuario)
      .subscribe({
        next: (res: Usuario) => {
          console.log(res);
          this.cargandoOp = false;
        },
        error: (error) => {
          console.log(error)
          this.cargandoOp = false;
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
    if(this.form.get(campo)?.hasError('estaHabilitado')){
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
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^ <>()[\]\., ;: \s @\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }

  validacionCorreo(service: UsuarioService) {
    return (control: AbstractControl) => {
      let nombre = control.value;
      return service.verificarCorreo(nombre)
        .pipe(
          tap(() => {
            console.log('Validacion asincrona')
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
