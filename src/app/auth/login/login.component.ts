import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
// services
import { AuthService } from 'src/app/services/auth.service';
// interfaces
import { UserI } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userDb: any;

  public user: FormGroup;

  constructor(private authService: AuthService, private _fb: FormBuilder) {
    this.user = this._fb.group({
      userId: [''],
      password: [''],
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.user = this._fb.group({
      userId: [
        this.user.value.userId,
        [Validators.required, Validators.minLength(6)],
      ],
      password: [this.user.value.password, [Validators.required]],
    });
  }

  loginUser() {
    const USER: UserI = this.user.value;
    this.authService.login(USER);
  }

  get invalidEmail() {
    return (
      this.user.controls.userId.touched &&
      this.user.controls.userId.status == 'INVALID'
    );
  }
  get invalidPassword() {
    return (
      this.user.controls.password.touched &&
      this.user.controls.password.status == 'INVALID'
    );
  }
}
