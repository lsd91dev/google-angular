import {NgModule} from "@angular/core";
import {RouterModule as AngularRouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../features/home/home.component";
import {GeolocationComponent} from "../features/geolocation/geolocation";
import {PlacesAutocomplete} from "../features/places-autocomplete/places-autocomplete";
import {GoogleMapComponent} from "../features/google-map/google-map.component";

const routes : Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'geolocation', component: GeolocationComponent, pathMatch: 'full' },
  { path: 'places-autocomplete', component: PlacesAutocomplete, pathMatch: 'full' },
  { path: 'map', component: GoogleMapComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    AngularRouterModule.forRoot(routes)
  ],
})

export class RouterModule {}
