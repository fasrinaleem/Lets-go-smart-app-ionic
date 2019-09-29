import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  { path: "token", loadChildren: "./token/token.module#TokenPageModule" },

  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule"
  },
  { path: "simple", loadChildren: "./simple/simple.module#SimplePageModule" },
  {
    path: "geolocation",
    loadChildren: "./geolocation/geolocation.module#GeolocationPageModule"
  },
  { path: "marker", loadChildren: "./marker/marker.module#MarkerPageModule" },
  {
    path: "direction",
    loadChildren: "./direction/direction.module#DirectionPageModule"
  },
  {
    path: "direction-geo",
    loadChildren: "./direction-geo/direction-geo.module#DirectionGeoPageModule"
  },
  {
    path: "autocomplete",
    loadChildren: "./autocomplete/autocomplete.module#AutocompletePageModule"
  },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
  },
  {
    path: "services",
    loadChildren: "./services/services.module#ServicesPageModule"
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "db-service",
    loadChildren: "./db-service/db-service.module#DbServicePageModule"
  },
  { path: 'trip-process', loadChildren: './trip-process/trip-process.module#TripProcessPageModule' },
  { path: 'trip-mode', loadChildren: './trip-mode/trip-mode.module#TripModePageModule' },
  { path: 'payment-method', loadChildren: './payment-method/payment-method.module#PaymentMethodPageModule' },
  { path: 'payment-web', loadChildren: './payment-web/payment-web.module#PaymentWebPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
