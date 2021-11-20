import {InjectionToken} from "@angular/core";
import {GeocodeRepository} from "../features/geolocation/infrastructure/geocode-repository";

export const GEO_REPOSITORY = new InjectionToken<GeocodeRepository>('GeocodeRepository')
