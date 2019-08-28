import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from '../auth.guard';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return new Promise(function (resolve, reject) {
      resolve(true);
    });
    // return this.http.post<User>('/api/login', {email, password})
    //     .shareReplay();
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }
}
