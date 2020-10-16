import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/all-products/products.component';

const routes: Routes = [
  {path:"home", component: HomeComponent}, 
  {path: "products", component: ProductsComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "cart", component: CartComponent},
  {path:"", redirectTo: "/home" , pathMatch: "full"},
  {path:"**", component: ErrorPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
