import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { ServicesPage } from "../services/services.page";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import { Constants } from "src/app/constants/constants";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html"
})
export class RegisterPage implements OnInit {
  public createUserForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public userService: ServicesPage,
    formbuilder: FormBuilder,
    public router: Router
  ) {
    this.createUserForm = formbuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  async createUser() {
    const loading = await this.loadingCtrl.create();

    const user: User = {
      username: this.createUserForm.value.username,
      email: this.createUserForm.value.email,
      password: this.createUserForm.value.password,
      type: Constants.USER_TYPE_USER,
      amount: Constants.USER_CREDIT_AMOUNT
      // jkbhbhbh
    };

    this.userService.signUp(user);
  }
}
