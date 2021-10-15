import { IPlace } from "./store-data.model";

export enum PlaceDestinationTypeEnum {
    ORIGIN = "origin",
    DESTINATION = "destination"
};

export interface IFavouritePlace {
    id: string;
    name: string;
    icon: string;
    place: IPlace;
}