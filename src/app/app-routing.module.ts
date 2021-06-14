import { NgModule } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes: Routes = [
  {path:'' , redirectTo:"login" , pathMatch:"full"},
  {path: "login" , component:LoginComponent},
  {path:'signUp' , component: SignUpComponent},
  {path:"resetPassword" , component: ResetPasswordComponent},
  {path:"forgetPassword" , component: ForgetPasswordComponent},
  {path:"dashboard" , component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
  //   [
  //   {path:'' , redirectTo:"login" , pathMatch:"full"},
  //   {path: "login" , component:LoginComponent},
  //   {path:'signUp' , component: SignUpComponent}
  // ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
