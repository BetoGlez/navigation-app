import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

import AppConstants from "../../app-config";
import { useTrip } from "../../hooks/trips/trips-hooks";

const NavMap: React.FC = () => {
    const {origin} = useTrip();

    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={origin && {
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: AppConstants.MAP_INITIAL_REGION_DELTA,
                longitudeDelta: AppConstants.MAP_INITIAL_REGION_DELTA,
            }}
        >
            { origin &&
                <Marker
                    identifier="origin"
                    title="Origin"
                    description={origin.description}
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                />
            }
        </MapView>
    );
};

export default NavMap;
