import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Object;
  itemData = {};


  constructor(private apiService: ApiService,private dataService: DataService ) { }

  ngOnInit() {

    this.apiService.getPosts().subscribe(data => {
      this.posts= data;
      console.log(this.posts);
    })
  }

  sendData(){
    this.dataService.sendMessageToCart(this.itemData);
    console.log(this.itemData);

  }



}
