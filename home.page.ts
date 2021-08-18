import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  option={
    centerdSlides: true,
    loop: true,
    spaceBetween : 10,
    autoplay: true,
  }

  manish:string="/assets/icon/aea5226dad7e6e45622880ff878e9593.jpg";

  constructor(private router:Router) {}



  toggleTheme(event)
  {
    if(event.detail.checked)
    {
      document.body.setAttribute('color-theme','dark');
    }
    else
    {
      document.body.setAttribute('color-theme','light');
    }
  }

  ngOnInit(){}

}
