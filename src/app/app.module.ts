import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';

import { MockServerService } from './libs/services/mock-server.service';

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
    NgbCollapseModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockServerService, { dataEncapsulation: false }
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
