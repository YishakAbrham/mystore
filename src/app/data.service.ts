import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private homeDataSource =  new Subject<any>();
  homeData$ = this.homeDataSource.asObservable();

  constructor() { }

  sendMessageToCart(data:any){

    return this.homeDataSource.next(data);

  }

}
