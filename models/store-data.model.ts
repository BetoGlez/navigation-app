import { IDistanceDurationData } from "./trip.model";

export interface ITripData {
    origin?: IPlace;
    destination?: IPlace;
    distanceDuration?: IDistanceDurationData;
};

export interface IPlace {
    description: string;
    location: ILocation;
};

export interface ILocation {
    lat: number;
    lng: number;
};