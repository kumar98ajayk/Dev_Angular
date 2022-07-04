import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

title:String="My Website Is Dynamic";
paragraph:String="A Responsive Website is created by Ajay Kushwaha";
menu:any=['About Us','Contact','Help'];

   menu1:any=['Home'];
  

// nav:any[] = ["Home", "Contact Us", "Serviess"];


  constructor() { }
 

  ngOnInit(): void {
  }

}
