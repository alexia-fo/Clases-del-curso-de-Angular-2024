import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './pages/form-control/form-control.component';

@NgModule({
  declarations: [
    MainComponent,
    FormBuilderComponent,
    FormGroupComponent,
    FormControlComponent,
  ],
  imports: [
    CommonModule,
    EjemplosRoutingModule,
    ReactiveFormsModule
  ]
})
export class EjemplosModule { }
