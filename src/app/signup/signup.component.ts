import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerUserData = {}

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  signUp(){
    this.api.signUp(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

  }

}
