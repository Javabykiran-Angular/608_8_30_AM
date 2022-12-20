import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='Sumit Raokhande';
  ishidden:boolean=false;
  imgurl:string='../../assets/bg2.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
