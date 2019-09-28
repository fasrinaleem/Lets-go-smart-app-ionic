import { Component, OnInit } from "@angular/core";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

// import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
//import { loadingController } from '@ionic/core';
import { Constants } from "../constants/constants";
import { User } from "../models/user";
//import { AnimationOnFinishCallback } from '@ionic/core/dist/types/utils/animation/animation-interface';
import { currentUserId } from "../services/services.page";

@Injectable({
  providedIn: "root"
})
export class DbServicePage implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  user: Observable<User[]>;

  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth) {
    // this.userCollection = afs.collection<User>('users');
    // this.user = this.afs.collection('users').snapshotChanges().pipe(map( changes => {
    //   console.log(changes)
    //    return changes.map( a => {
    //      console.log(a.payload.doc.data() as User);
    //   const data =  a.payload.doc.data() as User;
    //   const id = a.payload.doc.id;
    //   return  { id,  ... data };
    //    });
    //  }));
  }

  ngOnInit() {}

  getUser(id): any {
    console.log(this.afs);
    return this.afs
      .collection<any>("users")
      .doc(id)
      .valueChanges()
      .subscribe(data => {
        console.log(data);
      });
    // return this.user;
  }

  getUserEmail() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged((user: firebase.User) => {
        if (user) {
          console.log("User is logged in");
          resolve(user.uid);
        } else {
          console.log("User is not logged in");
          resolve(null);
        }
      });
    });
  }
  getPrice(id) {
    return this.afs
      .collection("users", ref => ref.where("id", "==", id))
      .valueChanges();
  }
}
