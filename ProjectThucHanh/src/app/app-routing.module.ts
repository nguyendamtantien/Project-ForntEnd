import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import {EmployeesComponent} from './employees/employees.component';
import {LoginComponent} from './login/login.component';
import { MainComponent } from './main/main.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { PositionsComponent } from './positions/positions.component';
import { AuthGuard } from './auth.guard';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  
  {path:"admin", component:MainComponent,
  canActivate:[AuthGuard],
  children:[
    {path:"positions", component: PositionsComponent},         
    {path:"employees", component: EmployeesComponent}, 
    {path:"admin", component: MainComponent},   
    {path:"profile", component: ProfileComponent}
    ]},
  // {path:"positions", component: PositionsComponent},
  // {path:"main", component: MainComponent},
  // {path:"home", component: HomeComponent},
  {path:"", component: LoginComponent},
  // {path:"employees", component: EmployeesComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"forgotpassword", component: ForgotPasswordComponent},
  {path:"verify-email",component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
