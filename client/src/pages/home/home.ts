import { IonicPage, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  openSearch(){
  	this.navCtrl.push('SearchPage');
  }

}
