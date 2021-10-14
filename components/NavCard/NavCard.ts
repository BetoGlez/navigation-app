import { useNavigation } from "@react-navigation/native";
import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

import { MapsNavStackRoutes, NavCardNavigation } from "../../routes/maps-navigation-stack";
import { useTrip } from "../../hooks/trips/trips-hooks";
import { IPlace } from "../../models/store-data.model";

export const useNavCard = () => {
    const navigation = useNavigation<NavCardNavigation>();
    const { setTripDestination } = useTrip();

    const setDestinationPlaceData = (data: GooglePlaceData, detail: GooglePlaceDetail | null) => {
        if (detail) {
            const place: IPlace = {
                description: data.description,
                location: detail.geometry.location
            };
            setTripDestination(place);
            console.log("Trip destination set: ", place);
            navigation.navigate(MapsNavStackRoutes.RIDE_OPTS_CARD);
        }
    };

    return { setDestinationPlaceData };
};