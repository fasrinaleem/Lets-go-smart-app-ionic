import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'autocomplete', loadChildren: './autocomplete/autocomplete.module#AutocompletePageModule' },
  { path: 'direction', loadChildren: './direction/direction.module#DirectionPageModule' },
  { path: 'direction-geo', loadChildren: './direction-geo/direction-geo.module#DirectionGeoPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerPageModule' },
  { path: 'simple', loadChildren: './simple/simple.module#SimplePageModule' },
  { path: 'token', loadChildren: './token/token.module#TokenPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
