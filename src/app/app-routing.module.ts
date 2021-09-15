import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [

  {
    path: "",
    component: NavbarComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "admin/dashboard",
    component: DashboardComponent,
    pathMatch: "full",
    canActivate: [AdminGuard]
  },
  {
    path: "user/dashboard",
    component: UserDashboardComponent,
    pathMatch: "full",
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
