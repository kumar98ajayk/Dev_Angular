import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

collectionofimg:any=["Image-1 using *ngFor","Image-2 using *ngFor","Image-3 using *ngFor","Image-4 using *ngFor","Image-5 using *ngFor","Image-6 using *ngFor"];
firstImgBox:any=["First-Image","Second-Image"];

about:string="About Me";
photos:string="Photos of Ajay Kushwaha :";
more:string="More Text";
// isMoreText:boolean=true;
isMoreText:number=10;
lorem:string="Lorem Epson Site Me!";
pr:string="Some text about me in culpa qui officia deserunt mollit anim. Comming Dynamic";
discValue:number=5;
  constructor() { }

  ngOnInit(): void {
  }

}
