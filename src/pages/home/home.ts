import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProveedorService } from "../../services/proveedor";
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { PrincipalPage } from "../principal/principal";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



 email: string = "";
  nombre: string = "";
  foto = "";
  public datax: any = { user: '', pass: '' };

  constructor(public navCtrl: NavController, private fire: AngularFireAuth,
    public proveedor: ProveedorService) {
    this.proveedor.getQuotes();
  }

goDatos() {

    for (let index = 0; index < this.proveedor.data.length; index++) {
      if (this.datax.user == this.proveedor.data[index].user &&
        this.datax.pass == this.proveedor.data[index].pass) {

        this.navCtrl.push(PrincipalPage, {
          correo: this.proveedor.data[index].correo,
          name: this.proveedor.data[index].name, photo: this.proveedor.data[index].photo
        });
      }

    }

  }

  loginFacebook() {

    this.fire.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(() => {
      this.fire.auth.getRedirectResult().then(res => {
        this.email = res.user.email;
        this.nombre = res.user.displayName;
        this.foto = res.user.photoURL;
        this.navCtrl.push(PrincipalPage, { correo: this.email, name: this.nombre, photo: this.foto });
      });

    })

  }


}
