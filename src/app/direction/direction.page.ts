import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationExtras, Router } from "@angular/router";
declare var google;
@Component({
  selector: "app-direction",
  templateUrl: "./direction.page.html",
  styleUrls: ["./direction.page.scss"]
})
export class DirectionPage implements OnInit, AfterViewInit {
  @ViewChild("mapElement") mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionForm: FormGroup;
  distance: string = "";
  duration: string = "";
  totalPrice: number = 0;
  constructor(private fb: FormBuilder, private router: Router) {
    this.createDirectionForm();
  }

  setDistance(distance) {
    this.distance = distance;
  }
  setDuration(duration) {
    this.duration = duration;
  }
  setTotalPrice(totalPrice) {
    this.totalPrice = parseInt(totalPrice) * 2;
    console.log(this.totalPrice);
  }

  ngOnInit() {}

  createDirectionForm() {
    this.directionForm = this.fb.group({
      source: ["", Validators.required],
      destination: ["", Validators.required]
    });
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
    this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route(
      {
        origin: formValues.source,
        destination: formValues.destination,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          that.directionsDisplay.setDirections(response);
          console.log(response);
          this.setDistance(response.routes[0].legs[0].distance.text);
          this.setDuration(response.routes[0].legs[0].duration.text);
          this.setTotalPrice(response.routes[0].legs[0].distance.text);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  goToPayment() {
    let data = {
      distance: this.distance,
      totalPrice: this.totalPrice,
      duration: this.duration
    };
    let naviagtionExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(["trip-process"], naviagtionExtras);
  }
}
