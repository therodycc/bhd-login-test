import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
// components
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
// import { HttpGlobalInterceptor } from './interceptor/http.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, PagesModule],
  providers: [
    /*    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpGlobalInterceptor,
      multi: true,
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
