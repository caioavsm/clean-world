import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'home', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRouteModule { }