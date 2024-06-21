import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//para ngModule
import { FormsModule } from '@angular/forms';
import { UnoComponent } from './ejercicios/uno/uno.component';
import { DosComponent } from './ejercicios/dos/dos.component';
import { TresComponent } from './ejercicios/tres/tres.component';
import { CuatroComponent } from './ejercicios/cuatro/cuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    CuatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
