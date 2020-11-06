import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/all-products/products.component';
import { SingleProductComponent } from './pages/products/single-product/single-product.component';

const routes: Routes = [
  {path:"home", component: HomeComponent}, 
  {path: "products", component: ProductsComponent},
  {path: "products/:id", component: SingleProductComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "cart", component: CartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "admin", component: DashboardComponent},
  {path:"", redirectTo: "/products" , pathMatch: "full"},
  {path:"**", component: ErrorPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
