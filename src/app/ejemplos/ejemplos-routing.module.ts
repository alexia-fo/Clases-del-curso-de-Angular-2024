import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { FormControlComponent } from './pages/form-control/form-control.component';

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
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemplosRoutingModule { }
