import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarUsuariosComponent } from './paginas/listar-usuarios/listar-usuarios.component';
import { PruebaComponent } from './paginas/prueba/prueba.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './paginas/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './paginas/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    ListarUsuariosComponent,
    PruebaComponent,
    MainComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
