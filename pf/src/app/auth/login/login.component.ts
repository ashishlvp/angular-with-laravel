import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
df
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = 'Loading....';
   loginform = {
     email: '',
     password:''
    }
    isLoading = false;
  public error = null;
    constructor(private http:HttpClient,private router:Router,private token:TokenService,
      private Auth: AuthService){}
    ngOnInit(){

    }
  onSubmit() {
    this.isLoading = true;
    if (this.loginform) {
      this.http.post('http://127.0.0.1:8000/api/login', this.loginform).subscribe(data => this.handleResponse(data),
      error=> this.handleError(error),


      )
    }
  }
  handleResponse(data:{})  {

    this.token.handle(data);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('');

  }
  handleError(error) {
    this.isLoading = false;
    console.log(error);

    this.error = error.error.error;

  }
}
