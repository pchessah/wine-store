import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    ProductsComponent,
    AboutUsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
