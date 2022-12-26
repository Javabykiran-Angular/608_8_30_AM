import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core java",'Advanced java','Spring Boot','JSP','Angular 12','Jenkings','Docker','AWS'];

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
  selected:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over event occur...")
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
