import {Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FieldPage } from '../pages/field/field';
import { FirstPage } from "../pages/first/first";

import { Geolocation } from '@ionic-native/geolocation';
import{ UserPage } from'../pages/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  

  rootPage:any = FirstPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Hem', component: HomePage},
      {title: 'Lista med planer', component: ListPage},
      {title: 'Fotbollsplan', component: FieldPage}

    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  goUserPage(page) {
  
    this.nav.setRoot(UserPage);
  }
  goToList(page) {
  
    this.nav.setRoot(ListPage);
  }
}
