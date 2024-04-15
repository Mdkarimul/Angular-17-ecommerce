import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { UserType } from '../types/auth-type';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor(private http:HttpClient) { }

private url:string = 'http://localhost:3000/'

  post(data:UserType):Observable<unknown>{
    
  return  this.http.post<UserType>(this.url+"signup",data);

  }
}
