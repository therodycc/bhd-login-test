import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from '../components/layout/header/header.component';



@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    ProductsComponent,
    HeaderComponent
  ],
  providers:[
  ]
})
export class PagesModule { }
