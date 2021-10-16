import axios from "axios";

import { useAppDispatch } from "../common/store-hooks";
import AppConstants from "../../app-config";
import { IDistanceMatrixPayload, IDistanceMatrixResponse } from "../../models/get-requests.model";
import { setDistanceDurationDataActionCreator } from "../../store/trip-data/tripDataSlice";

export const useTripData = () => {
    const dispatch = useAppDispatch();

    const getTravelTime = async (origin: string, destination: string, googleKey: string): Promise<IDistanceMatrixResponse> => {
        const params: IDistanceMatrixPayload = {
            key: googleKey,
            origins: origin,
            destinations: destination,
            units: AppConstants.DISTANCE_UNIT
        };
        const distanceMatrix = (await axios.get<IDistanceMatrixResponse>(AppConstants.BASE_DISTANCE_MATRIX_API_URL, {params})).data;
        console.log("Distance data: ", distanceMatrix);
        return distanceMatrix;
    };

    const calculateDistanceDurationData = async (origin: string, destination: string, googleKey: string) => {
        const distanceMatrix = await getTravelTime(origin, destination, googleKey);
        dispatch(setDistanceDurationDataActionCreator(distanceMatrix.rows[0].elements[0]));
    };

    return { calculateDistanceDurationData };
};