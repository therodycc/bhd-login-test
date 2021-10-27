import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from '../components/layout/header/header.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, HeaderComponent, PagesComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductsComponent, HeaderComponent],
  providers: [],
})
export class PagesModule {}
