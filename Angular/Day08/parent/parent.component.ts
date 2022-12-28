import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Hopes So u r enjoying Angular 12 Module ';
  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  ChildArrObjReceived:any[]=[];

  ChildStrDataReceived:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
