import { useAppDispatch, useAppSelector } from "../common/store-hooks";
import { IPlace } from "../../models/store-data.model";
import { setDestinationActionCreator, setOriginActionCreator } from "../../store/trip-data/tripDataSlice";

export const useTrip = () => {
    const dispatch = useAppDispatch();
    const {origin, destination} = useAppSelector(state => state.tripData);

    const setTripOrigin = (place: IPlace) => {
        dispatch(setOriginActionCreator(place));
        dispatch(setDestinationActionCreator(undefined));
    };

    return { origin, destination, setTripOrigin };
};