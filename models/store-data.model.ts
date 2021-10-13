export interface ITripData {
    origin?: IPlace;
    destination?: IPlace;
    travelTimeInfo?: string;
};

export interface IPlace {
    description: string;
    location: ILocation;
};

export interface ILocation {
    lat: number;
    lng: number;
};