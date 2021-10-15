import { useNavigation } from "@react-navigation/core";

import { useTrip } from "../../hooks/trips/trips-hooks";
import { IPlace } from "../../models/store-data.model";
import { PlaceDestinationTypeEnum } from "../../models/trip.model";
import { MapsNavStackRoutes, NavCardNavigation } from "../../routes/maps-navigation-stack";
import { HomeScreenNavigation, RootStackRoutes } from "../../routes/root-stack";

export const useNavFavourite = () => {
    const navCardNavigation = useNavigation<NavCardNavigation>();
    const homeScreenNavigation = useNavigation<HomeScreenNavigation>();
    const {setTripOrigin, setTripDestination} = useTrip();

    const setPlaceData = (place: IPlace, placeType: PlaceDestinationTypeEnum) => {
        switch (placeType) {
            case PlaceDestinationTypeEnum.ORIGIN:
                setTripOrigin(place);
                console.log("Trip origin set: ", place);
                homeScreenNavigation.navigate(RootStackRoutes.ROUTE_MAP);
                break;
            case PlaceDestinationTypeEnum.DESTINATION:
                setTripDestination(place);
                console.log("Trip destination set: ", place);
                navCardNavigation.navigate(MapsNavStackRoutes.RIDE_OPTS_CARD);
                break;
        }
    };

    return { setPlaceData };
};