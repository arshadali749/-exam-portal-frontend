import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [

  // {
  //   path:"",
  //   component:NavbarComponent,
  //   pathMatch:"full"
  // },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
