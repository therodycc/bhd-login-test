import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, AuthComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, HttpClientModule],
  exports: [LoginComponent],
})
export class AuthModule {}
