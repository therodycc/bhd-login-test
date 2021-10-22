import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;
  userDb: any;

  constructor(private authService: AuthService) {
    this.user = '';
    this.password = '';
  }

  ngOnInit() {}

  async loginUser() {
    const USER: UserI = {
      userId: this.user,
      password: this.password,
    };
    this.authService.login(USER);
  }

  get disabled() {
    return this.user === '' || this.password === '' ? true : false;
  }
}
