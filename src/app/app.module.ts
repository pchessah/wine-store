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
import { CartModalComponent } from './components/products/cart-modal/cart-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';
import { AngularFireModule,  } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NewProductsComponent } from './admin/new-products/new-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { DashboardComponent } from './admin/dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    ProductsComponent,
    AboutUsComponent,
    CartComponent,
    CartModalComponent,
    NewProductsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgbCollapseModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
