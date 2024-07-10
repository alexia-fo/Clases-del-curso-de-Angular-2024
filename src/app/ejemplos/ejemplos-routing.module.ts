import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { FormControlComponent } from './pages/form-control/form-control.component';
import { AbmUsuarioComponent } from './pages/abm-usuario/abm-usuario.component';
import { CambiarContraseniaComponent } from './pages/cambiar-contrasenia/cambiar-contrasenia.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';

const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[
    {
      path:'formControl',
      component:FormControlComponent
    },
    {
      path:'formGroup',
      component:FormGroupComponent
    },
    {
      path:'formBuilder',
      component:FormBuilderComponent
    },
    // {
    //   path:'usuario',
    //   component:AbmUsuarioComponent
    // },
    // {
    //   path:'usuario/:id',
    //   component:AbmUsuarioComponent
    // },
    {
      path:'cambiarContra/:id',
      component:CambiarContraseniaComponent
    },
    {
      path:'nuevoUsuario',
      component:NuevoUsuarioComponent
    },
    {
      path:'editarUsuario/:id',
      component:EditarUsuarioComponent
    },
    {
      path:'listaUsuarios',
      component:ListaUsuariosComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemplosRoutingModule { }
