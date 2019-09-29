import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-trip-process",
  templateUrl: "./trip-process.page.html",
  styleUrls: ["./trip-process.page.scss"]
})
export class TripProcessPage implements OnInit {
  data: any;
  distance: any;
  duration: any;
  totalPrice: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // console.log(this.router.getCurrentNavigation().extras.state.data);
        this.data = this.router.getCurrentNavigation().extras.state.data;
      } else {
        this.router.navigate(["home"]);
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
  }
}
