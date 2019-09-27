import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { ServicesPage } from '../services/services.page';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
// import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  splash = true;
 
  
  public userLoginForm: FormGroup;
  constructor(
    public userService: ServicesPage,
     public router: Router,
     formBuilder: FormBuilder,
    // public navCtrl: NavController

  ) {
    this.userLoginForm =new FormGroup({
      email: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
     
    });

   }

  ngOnInit() { }

  userLogin(formData: FormData) {
    
    this.userService.login(formData["email"], formData["password"])

  }





}
