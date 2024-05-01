import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, retry, tap } from 'rxjs';
import { LoginType, UserType } from '../types/auth-type';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor() { }

private url:string = 'http://localhost:3000/';
public jwt_token:string = "JWT_TOKEN";
private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
private http = inject(HttpClient);
private loginUser:string = '';
private router = inject(Router);
  signup(data:UserType):Observable<unknown>{
  return  this.http.post<UserType>(this.url+"users/signup",data);
  }

  login(data:LoginType):Observable<any>{
    return this.http.post(this.url+'users/login',data).pipe(
      tap((tokens:any)=>{
        console.log(tokens);
        this.doLoginUser(data.email,tokens.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  private doLoginUser(username:string,token:string){
    this.loginUser = username;
    this.storeJwt(token);
  }

  private storeJwt(token:string){
      localStorage.setItem(this.jwt_token,token);
  }


  logout(){
    localStorage.removeItem(this.jwt_token);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLogedin():boolean{
   return this.isAuthenticatedSubject.value;
  }

}
