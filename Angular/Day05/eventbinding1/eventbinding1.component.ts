import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  result!:number;
  name:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(myname:any){
    console.log("Change Event Occur..")

    myname.style.background='green';
    myname.style.color='white';
    console.log(myname.value)

  }

  onKeyUp(){
    console.log("Key up event occur")
  }
  onKeyDown(){
    console.log("Key Down event occur..")
  }

}
