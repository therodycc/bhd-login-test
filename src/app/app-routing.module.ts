import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PageRoutingModule } from './pages/page-routing.module';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  // path:'/auth' AuthRouting
  // path:'/pages' AuthRouting
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '*', redirectTo: '/auth/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), PageRoutingModule, AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
