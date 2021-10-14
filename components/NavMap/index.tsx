import React from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";

import { DESTINATION_MARKER_ID, ORIGIN_MARKER_ID, useNavMap } from "./NavMap";
import AppConstants from "../../app-config";

const NavMap: React.FC = () => {
    const {origin, destination, mapRef} = useNavMap();

    return (
        <MapView
            ref={mapRef}
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
                    identifier={ORIGIN_MARKER_ID}
                    title="Origin"
                    description={origin.description}
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                />
            }
            { destination &&
                <Marker
                    identifier={DESTINATION_MARKER_ID}
                    title="Destination"
                    description={destination.description}
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                />
            }
            { (origin && destination) &&
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    lineDashPattern={[0]}
                    strokeWidth={AppConstants.MAP_DIRECTIONS_STROKE_WIDTH}
                    strokeColor={AppConstants.MAP_DIRECTIONS_STROKE_COLOR}
                    apikey={GOOGLE_MAPS_API_KEY}
                />
            }
        </MapView>
    );
};

export default NavMap;
