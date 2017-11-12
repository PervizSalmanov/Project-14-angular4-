import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    imageSrc: string = "../assets/images/logo.png";
    im: string = "../assets/images/cart.png";
    imar: string = "../assets/images/button.png";
    home: string;
    menu: string;
    reservation: string;
    recipe: string;
    blog: string;
    pages: string;
    contact: string;

    constructor(){
      this.home = "HOME";
      this.menu = "MENU";
      this.reservation = "RESERVATİON";
      this.recipe = "RECİPE";
      this.blog = "BLOG";
      this.pages = "PAGES";
      this.contact = "CONTACT";
    }

}
