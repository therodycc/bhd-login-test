import { Component, OnInit } from '@angular/core';
import { AccountI } from 'src/app/interfaces/account.interface';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  accounts: AccountI[] = [];
  constructor(
    private httpService: HttpService,
    private notification: NotificationService
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
        this.notification.showError(`${error.status}`, 'Invalid url backend');
      }
    );
  }
}
