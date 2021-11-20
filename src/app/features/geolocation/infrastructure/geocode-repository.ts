import {} from 'google.maps';


export interface GeocodeRepository {
  geocode(): Promise<google.maps.GeocoderResult[]>;
}
