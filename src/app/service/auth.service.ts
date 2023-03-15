import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    let userArray: any[]=[];
    userArray=JSON.parse(localStorage.getItem('User')as string);
    if(userArray.find((ele:any)=> ele.email===email && ele.password==password)){
      this.setToken("fkjdhfdhfihvnbkjdfbvkjfkhdshdj");
      return of({ name: email, email: password });
    }
    else{
      return throwError(new Error('Failed to login'));
    }
  }
}
