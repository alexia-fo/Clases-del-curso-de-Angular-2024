import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './paginas/listar-usuarios/listar-usuarios.component';
import { PruebaComponent } from './paginas/prueba/prueba.component';
import { MainComponent } from './components/main/main.component';
import { NuevoUsuarioComponent } from './paginas/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './paginas/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'lista',
        component:ListarUsuariosComponent
      },
      {
        path:'nuevoUsuario',
        component:NuevoUsuarioComponent
      },
      {
        path:'editarUsuario/:id',
        component:EditarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
