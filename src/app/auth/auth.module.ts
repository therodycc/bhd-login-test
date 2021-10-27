// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
// components
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, AuthComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, HttpClientModule, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class AuthModule {

}
