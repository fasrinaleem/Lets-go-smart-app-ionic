import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Simple Map",
      url: "/simple",
      icon: "list"
    },
    {
      title: "Geo Location",
      url: "/geolocation",
      icon: "list"
    },
    {
      title: "Custom Marker",
      url: "/marker",
      icon: "list"
    },
    {
      title: "Direction",
      url: "/direction",
      icon: "list"
    },
    {
      title: "Direction with GeoLocation",
      url: "/direction-geo",
      icon: "list"
    },
    {
      title: "Autocomplete",
      url: "/autocomplete",
      icon: "list"
    },
    {
      title: "Trip Process",
      url: "/trip-process",
      icon: "list"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
