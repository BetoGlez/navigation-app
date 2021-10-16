import { IDistanceDurationData } from "./trip.model";

export interface IDistanceMatrixPayload {
    units: "imperial" | "metric";
    origins: string;
    destinations: string;
    key: string;
};

export interface IDistanceMatrixResponse {
    destination_addresses: Array<string>;
    origin_addresses: Array<string>;
    rows: Array<{
        elements: Array<IDistanceDurationData>;
    }>;
    status: string;
};