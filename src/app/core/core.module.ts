import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {HomeComponent} from "../features/home/home.component";
import {RouterModule} from "./router.module";
import {RouterModule as RoutingModule} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {GeolocationComponent} from "../features/geolocation/geolocation";
import {GoogleMapComponent} from "../features/google-map/google-map.component";
import {PlacesAutocomplete} from "../features/places-autocomplete/places-autocomplete";
import {GEO_REPOSITORY} from "./types";
import {GeocodeHttpRepository} from "../features/geolocation/infrastructure/geocode-http-repository";

@NgModule({
  declarations:[
    HomeComponent,
    GeolocationComponent,
    GoogleMapComponent,
    PlacesAutocomplete
  ],
  providers: [
    { provide: GEO_REPOSITORY, useClass: GeocodeHttpRepository }
  ],
  imports: [ BrowserModule, RouterModule, RoutingModule],
  exports: [ RouterModule, RoutingModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule {}
