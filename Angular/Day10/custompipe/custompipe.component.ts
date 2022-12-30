import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam possimus aspernatur magni architecto quaerat dicta accusantium totam? Recusandae iste sapiente est temporibus explicabo, praesentium culpa, fugit, eligendi quam soluta laborum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam possimus aspernatur magni architecto quaerat dicta accusantium totam? Recusandae iste sapiente est temporibus explicabo, praesentium culpa, fugit, eligendi quam soluta laborum.';
  constructor() { }

  ngOnInit(): void {
  }

}
