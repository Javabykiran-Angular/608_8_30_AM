import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    myid:number=9;
    myusername:string='Sumit-Raokhande';
    jsonObj={
      id:8,
      fname:'Sumit',
      role:'DevOps'      
    }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.myid=3;
    this.router.navigate(['/Page2',this.myid]);
  }

  onPage3(){
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }

  onFollower(){
    this.router.navigate(['/Follower'])
  }

  onQueryParam(){
    this.router.navigate(['/queryparameter'],{
        queryParams:this.jsonObj
    })
  }
  

}
