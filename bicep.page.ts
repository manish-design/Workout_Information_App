import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bicep',
  templateUrl: './bicep.page.html',
  styleUrls: ['./bicep.page.scss'],
})
export class BicepPage implements OnInit {


  one:string="/assets/icon/Barbell-Preacher-Curl-Biceps-Workout.jpg.gif";
  two:string="/assets/icon/f11d505f436bf1332f8c90060e0742d1.gif";
  three:string="/assets/icon/Incline-bicep-curl (1).gif";
  four:string="/assets/icon/16541301-Dumbbell-Biceps-Curl-Reverse_Upper-Arms_360.gif";
  five:string="/assets/icon/seateddby.gif";
  six:string="/assets/icon/Dumbbell-curl.gif";

  constructor() { }

  ngOnInit() {
  }

}
