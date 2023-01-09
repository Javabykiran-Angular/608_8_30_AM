import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


  
  arrobj=[
    {
      name:'Motorola',
      price:'30000',
      qty:1
    },
    {
      name:'Samsung',
      price:'25000',
      qty:2
    },
    {
      name:'OnePlus',
      price:'35000',
      qty:3
    },
    {
      name:'RealMe',
      price:'20000',
      qty:4
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
