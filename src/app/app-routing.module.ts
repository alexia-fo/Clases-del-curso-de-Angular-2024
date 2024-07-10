import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'administracion',
    loadChildren:()=>import('./admin/admin.module').then((m)=> m.AdminModule)
  },
  {
    path:'ejemplos',
    loadChildren:()=>import('./ejemplos/ejemplos.module').then((m)=> m.EjemplosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
