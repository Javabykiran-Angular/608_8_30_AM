import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

    @Output() childStrEvent=new EventEmitter();
     @Output() ChildArrObjEvent=new EventEmitter();

    strData:string='Sumit Raokhande of Angular 12 Trainer';
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

  onSend(){
      this.childStrEvent.emit(this.strData);
      this.ChildArrObjEvent.emit(this.arrobj);
  }

}
