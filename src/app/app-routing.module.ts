import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"home", component: HomeComponent}, 
  {path:"", redirectTo: "/home" , pathMatch: "full"},
  {path:"**", component: ErrorPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
