import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate: [BeforeLoginService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
