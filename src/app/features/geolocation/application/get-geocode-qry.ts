import {GeocodeRepository} from "../infrastructure/geocode-repository";
import {Inject, Injectable} from "@angular/core";
import {GEO_REPOSITORY} from "../../../core/types";

@Injectable({ providedIn: 'root' })
export class GetGeocodeQry {
  constructor(
    @Inject(GEO_REPOSITORY)
    private readonly geocodeRepository: GeocodeRepository
  ) {}

  execute(): Promise<google.maps.GeocoderResult[]>{
    return this.geocodeRepository.geocode();
  }
}
