import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProveedorService } from "../../services/proveedor";


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


}
