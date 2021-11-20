import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  latLng: google.maps.LatLngLiteral;

  lat!: number;
  lng!: number;

  constructor(private readonly route: ActivatedRoute) {
    this.latLng = {lat: this.lat, lng: this.lng };
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( param => {
      this.lat = param['lat'];
      this.lng = param['lng'];
      console.log(this.lat, this.lng);
    })
  }


}
