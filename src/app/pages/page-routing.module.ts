import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'private', redirectTo: 'private/accounts' },
  {
    path: 'private',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'accounts', component: ProductsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
