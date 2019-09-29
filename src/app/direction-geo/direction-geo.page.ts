import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router, NavigationExtras } from "@angular/router";
declare var google;
@Component({
  selector: "app-direction-geo",
  templateUrl: "./direction-geo.page.html",
  styleUrls: ["./direction-geo.page.scss"]
})
export class DirectionGeoPage implements OnInit, AfterViewInit {
  @ViewChild("mapElement") mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  distance: string = "";
  duration: string = "";
  totalPrice: number = 0;
  geocoder = new google.maps.Geocoder();
  directionForm: FormGroup;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  constructor(
    private fb: FormBuilder,
    private geolocation: Geolocation,
    private router: Router
  ) {
    this.createDirectionForm();
  }

  ngOnInit() {}

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
  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ["", Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then(resp => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
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
        origin: this.currentLocation,
        destination: formValues.destination,
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          that.directionsDisplay.setDirections(response);
          console.log(response.routes[0].legs[0]);
          this.setDistance(response.routes[0].legs[0].distance.text);
          this.setDuration(response.routes[0].legs[0].duration.text);
          this.setTotalPrice(response.routes[0].legs[0].distance.text);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  getlongLat(destination: string) {
    this.geocoder.geocode({ address: destination }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log("Latitude: " + results[0].geometry.location.lat());
        console.log("Longitude: " + results[0].geometry.location.lng());
        // this.destinationLong = results[0].geometry.location.lng();
        this.destinationLatt = results[0];
        // this.destinationLatt = results[0].geometry.location.lat();
      } else {
        console.log(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
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
