import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tHome: string="My Awesome Angular Session";
startSince: string=" Started from Saturday, April 16, 2022";
sText: string="We are learning here power of Directives in Angular !!";

para: string="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
secondHeading: string= "Angular session will go !!";

titleDesc:string="Second Title Description";

firstImg:any=["Image-1 using *ngFor", "Image-2 using *ngFor"];
constructor() { }

  ngOnInit(): void {
  }
  count=0
  counter(type:String)
  {
   type==='add' ?this.count++:this.count--;
  }

}
