import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  personForm: FormGroup;
  displayData: any;
  isValidToShow: boolean = false;
  model: ILogin = { username: "admin", password: "admin123" };
  loginForm: FormGroup;
  errorMessage: string;
  returnUrl: string;
  isAuthError: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }


  doLogin() {
    this.isAuthError = false;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      if (this.f.username.value == this.model.username && this.f.password.value == this.model.password) {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.username.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.isAuthError = true;
        this.errorMessage = "Please check your userid and password";
      }
    }
  }

}
