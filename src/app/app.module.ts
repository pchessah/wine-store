import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductsComponent } from './pages/products/all-products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';
import { AngularFireModule, } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NewProductsComponent } from './admin/new-products/new-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SingleProductComponent } from './pages/products/single-product/single-product.component';
import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutModalComponent } from './components/checkout-modal/checkout-modal.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    ProductsComponent,
    AboutUsComponent,
    CartComponent,
    NewProductsComponent,
    DashboardComponent,
    SingleProductComponent,
    CartBadgeComponent,
    CheckoutComponent,
    CheckoutModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ closeButton: true }),
    NgbCollapseModule,
    FlexLayoutModule,
    MatDialogModule,
    MatListModule, 
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    
    MatFormFieldModule,    
    MatBadgeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
