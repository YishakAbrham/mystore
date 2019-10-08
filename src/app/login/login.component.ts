import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {}

  constructor(private api: ApiService,private router: Router) { }

  ngOnInit() {
  }

  logIn(){
    // this.api.logIn(this.loginData).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)


    // );
    this.router.navigate(['/home'])


  }


}
