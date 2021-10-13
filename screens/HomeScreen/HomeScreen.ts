import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

import { useTrip } from "../../hooks/trips/trips-hooks";
import { IPlace } from "../../models/store-data.model";

export const useHomeScreen = () => {
    const {setTripOrigin} = useTrip();

    const setPlaceData = (data: GooglePlaceData, detail: GooglePlaceDetail | null) => {
        if (detail) {
            const place: IPlace = {
                description: data.description,
                location: detail.geometry.location
            };
            setTripOrigin(place);
            console.log("Trip origin set: ", place);
        }
    };

    return { setPlaceData };
};