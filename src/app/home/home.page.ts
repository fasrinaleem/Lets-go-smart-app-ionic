import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ServicesPage } from "../services/services.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router, public userServices: ServicesPage) {}

  logout() {
    this.userServices.logOut();
  }
}
