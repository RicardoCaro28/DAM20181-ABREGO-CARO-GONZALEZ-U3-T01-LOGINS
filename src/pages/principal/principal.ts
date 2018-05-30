import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  correo='';
  name='';
  photo="";
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.correo=navParams.get('correo');
    this.name=navParams.get('name');
    this.photo=navParams.get('photo');
  }

  ionViewDidLoad() {
    console.log('DATOS RECIBIDOS!!');
    console.log(this.name);
    console.log(this.correo);
    console.log(this.photo);
  }
 

  out(){
    this.navCtrl.pop();
    //this.home.logout();
  }

}
