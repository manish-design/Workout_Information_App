import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tricep',
  templateUrl: './tricep.page.html',
  styleUrls: ['./tricep.page.scss'],
})
export class TricepPage implements OnInit {

  constructor() { }


  one:string="/assets/icon/bent_over_low_pulley_triceps_kickback-592041e083683.gif";
  two:string="/assets/icon/tricep-rope-pulldown.gif";
  three:string="/assets/icon/Triceps-cable-rope-pushdown.gif";
  four:string="/assets/icon/7558.gif";
  five:string="/assets/icon/17481301-EZ-Bar-Lying-Close-Grip-Triceps-Extension-Behind-Head_Upper-Arms_360.gif";
  six:string="/assets/icon/one-arm-dumbbell-extension.gif";
  seven:string="/assets/icon/men-diamond-push-up.gif";

  ngOnInit() {
  }

}
