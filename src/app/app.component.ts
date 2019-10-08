import { Component } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mystore';

  constructor(private router: Router) { }


  logOut(){
    this.router.navigate(['/login']);

  }
}
