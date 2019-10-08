import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private registerURL = "https://jsonplaceholder.typicode.com";
  private loginURL = "https://jsonplaceholder.typicode.com";


  constructor( private http:HttpClient) {}


  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  logIn(user){
    return this.http.post<any>(this.loginURL,user);

  }

  signUp(user){
    return this.http.post<any>(this.registerURL,user);
  }



}
