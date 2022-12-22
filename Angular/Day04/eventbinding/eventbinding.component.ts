import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  count:number=0;
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   
    if(this.count<1){
      console.log("Click event Occur...");
      this.count++;
    }
    
  }

  onImage(){
    console.log("on Image Click..")
  }

  onDoller(myevent:any){
    console.log(myevent)
    console.log(myevent.target.value)
  }

  onSend(myinput:any){
      console.log(myinput);
      console.log(myinput.value)
      myinput.style.background='green';
      myinput.style.color='white';
  }

  onSend1(myvalue:string){
      console.log(myvalue)
  }

  onAddition(num1:any,num2:any){

      let n1=+num1;
      let n2=+num2;
    this.result=n1+n2;
  }

}
