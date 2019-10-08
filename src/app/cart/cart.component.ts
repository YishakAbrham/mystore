import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private itemData ={}

  constructor( private dataService:DataService) { }

  ngOnInit() {

this.dataService.homeData$.subscribe(

  data =>
  {
    this.itemData = data,
    console.log(data)
  }
);

  }




}
