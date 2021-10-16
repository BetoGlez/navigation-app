import { ImageSourcePropType } from "react-native";

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
};

export interface IRideOption {
    id: string;
    title: string;
    costMultiplier: number;
    image: ImageSourcePropType;
};

export interface IDistanceDurationData {
    distance: {
        text: string;
        value: number;
    };
    duration: {
        text: string;
        value: number;
    };
};