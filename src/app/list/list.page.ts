import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ServicesPage } from "../services/services.page";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  splash = true;

  public userLoginForm: FormGroup;
  constructor(
    public userService: ServicesPage,
    public router: Router,
    formBuilder: FormBuilder
    // public navCtrl: NavController
  ) {
    this.userLoginForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  userLogin(formData: FormData) {
    this.userService.login(formData["email"], formData["password"]);
  }
}
