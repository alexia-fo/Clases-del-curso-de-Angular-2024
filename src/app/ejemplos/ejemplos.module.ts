import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './pages/form-control/form-control.component';
import { CambiarContraseniaComponent } from './pages/cambiar-contrasenia/cambiar-contrasenia.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    MainComponent,
    FormBuilderComponent,
    FormGroupComponent,
    FormControlComponent,
    CambiarContraseniaComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    ListaUsuariosComponent,
  ],
  imports: [
    CommonModule,
    EjemplosRoutingModule,
    ReactiveFormsModule
  ]
})
export class EjemplosModule { }
