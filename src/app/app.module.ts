import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

import { ProveedorService } from '../services/proveedor';


var config = {
  apiKey: "AIzaSyAC4SHE6ndKEAkFaIfbdXtvTPzjHNNVpCU",
  authDomain: "sesiones-e2824.firebaseapp.com",
  databaseURL: "https://sesiones-e2824.firebaseio.com",
  projectId: "sesiones-e2824",
  storageBucket: "sesiones-e2824.appspot.com",
  messagingSenderId: "773571315454"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    HttpModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    ProveedorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
