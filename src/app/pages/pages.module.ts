import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { FinalComponent } from './final/final.component';
import { LectorqrComponent } from './lectorqr/lectorqr.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    EncuestaComponent,
    RecuperacionComponent,
    FinalComponent,
    LectorqrComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
