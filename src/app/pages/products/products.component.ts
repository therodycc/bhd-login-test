import { Component, OnInit } from '@angular/core';
import { AccountI } from 'src/app/models/account.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  accounts: AccountI[] = [];
  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.httpService.getData('/products/accounts').subscribe(
      (res) => {
        this.accounts = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
