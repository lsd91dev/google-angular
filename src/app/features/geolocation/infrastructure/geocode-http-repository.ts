import { Injectable } from "@angular/core";
import {GeocodeRepository} from "./geocode-repository";
import {} from 'google.maps';

@Injectable({
  providedIn: 'root'
})
export class GeocodeHttpRepository implements GeocodeRepository {

  private readonly geocoder: google.maps.Geocoder

  constructor(){
    this.geocoder = new google.maps.Geocoder();
  }

  geocode(): Promise<google.maps.GeocoderResult[]> {
   const address = document.getElementById('address') as HTMLInputElement;
    return new Promise( (resolve, reject) => {
      this.geocoder.geocode({ 'address': address.value}, (results, status) => {
        if(status && results){
          resolve(results);
        }else{
          reject();
        }
      });
    });
  }

}
