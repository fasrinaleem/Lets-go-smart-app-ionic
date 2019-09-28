import { Component, OnInit } from "@angular/core";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
// import { AlertController, LoadingController } from '@ionic/angular';
import { Observable, BehaviorSubject } from "rxjs";
//import { loadingController } from "@ionic/core";
import { Constants } from "../constants/constants";
import { User } from "../models/user";
export let currentUserId = "";
@Injectable({
  providedIn: "root"
})
export class ServicesPage implements OnInit {
  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<
    string
  >(this.userStatus);

  constructor(
    private ngZone: NgZone,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {}
  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  signUp(users: User) {
    const email = users.email;
    const password = users.password;

    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(userResponse => {
        // add the user to the "users" database
        let user = {
          id: userResponse.user.uid,
          email: userResponse.user.email,
          role: users.type,
          amount: users.amount,
          username: users.username
        };

        //add the user to the database
        this.firestore
          .collection("users")
          .add(user)
          .then(user => {
            user.get().then(x => {
              //return the user data
              console.log(x.data());
              this.currentUser = x.data();
              this.setUserStatus(this.currentUser);
              this.router.navigate(["/login"]);
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log("An error ocurred: ", err);
      });
  }

  // login   abc@123

  login(email: string, password: string) {
    //check mail and password
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        //check role admin or user
        this.firestore
          .collection("users")
          .ref.where("email", "==", user.user.email)
          .onSnapshot(snap => {
            snap.forEach(userRef => {
              console.log("userRef", userRef.data());
              // currentUserId = user.user.email;
              this.currentUser = userRef.data();
              //setUserStatus
              this.setUserStatus(this.currentUser);
              if (userRef.data().role !== "admin") {
                // currentUserId = user.user.email;
                this.router.navigate(["/home"]);
              } else {
                this.router.navigate(["/admin-home"]);
              }
            });
          });
      })
      .catch(err => err);
  }

  getUserEmail() {
    return currentUserId;
  }

  logOut() {
    this.afAuth.auth
      .signOut()
      .then(() => {
        console.log("user signed Out successfully");
        //set current user to null to be logged out
        this.currentUser = null;
        //set the listenener to be null, for the UI to react
        this.setUserStatus(null);
        this.ngZone.run(() => this.router.navigate(["/login"]));
      })
      .catch(err => {
        console.log(err);
      });
  }
}
