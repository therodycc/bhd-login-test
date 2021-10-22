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
  disabled: boolean;
  userDb: any;

  constructor(private userService: UserService) {
    this.user = '';
    this.password = '';
    this.disabled = false;
  }

  ngOnInit() {}

  async loginUser() {
    const USER: UserI = {
      userId: this.user,
      password: this.password,
    };
    this.userService.login(USER);
  }
}
