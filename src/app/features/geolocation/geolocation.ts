import {Component} from "@angular/core";
import {GetGeocodeQry} from "./application/get-geocode-qry";
import {Router} from "@angular/router";

@Component({
  selector: 'app-geolocation',
  styleUrls: ['./geolocation.css'],
  templateUrl: './geolocation.html',
})

export class GeolocationComponent {

 constructor(private readonly getGeocodeQry: GetGeocodeQry,
             private readonly router: Router){}

  geocoder(){
   this.getGeocodeQry.execute()
      .then( result => {
        const lat = result[0].geometry.location.lat();
        const lng = result[0].geometry.location.lng();
        this.router.navigate(['/map', { lat, lng }])
      } )
      .catch(error => console.log(error));
  }
}
