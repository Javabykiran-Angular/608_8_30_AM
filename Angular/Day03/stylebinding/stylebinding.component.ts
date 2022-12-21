import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=21;

  jsonObj={
    color:'red',
    fontSize:'32px',
    "font-family":'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
