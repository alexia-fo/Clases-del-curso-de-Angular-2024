import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarUsuariosComponent } from './paginas/listar-usuarios/listar-usuarios.component';
import { PruebaComponent } from './paginas/prueba/prueba.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    ListarUsuariosComponent,
    PruebaComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
