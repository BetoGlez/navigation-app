import { useEffect, useRef } from "react";
import MapView from "react-native-maps";

import { useTrip } from "../../hooks/trips/trips-hooks";
import AppConstants from "../../app-config";

export const ORIGIN_MARKER_ID = "origin";
export const DESTINATION_MARKER_ID = "destination";

export const useNavMap = () => {
    const {origin, destination} = useTrip();
    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        if (origin && destination && mapRef.current) {
            console.log("Zoom and fit map markers");
            mapRef.current.fitToSuppliedMarkers([ORIGIN_MARKER_ID, DESTINATION_MARKER_ID], {
                edgePadding: AppConstants.MAP_FIT_EDGE_PADDING
            });
        }
    }, [origin, destination]);

    return { origin, destination, mapRef };
};