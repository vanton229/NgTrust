import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    LoginComponent,
    Error404Component,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
