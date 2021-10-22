import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [
    {
      alias: 'Cuenta de ahorros 1',
      number: '1234567890001',
      availableAmount: 100000,
      productType: 'AC',
    },
    {
      alias: 'Cuenta de ahorros 2',
      number: '1234567890002',
      availableAmount: 200000,
      productType: 'AC',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
