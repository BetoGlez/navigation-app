import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TRIP_DATA_INITIAL_STATE } from "./tripData.constants";
import AppConstants from "../../app-config";
import { IPlace } from "../../models/store-data.model";
import { IDistanceDurationData } from "../../models/trip.model";

export const tripDataSlice = createSlice({
    name: AppConstants.ReduxSlices.TRIP_DATA_SLICE,
    initialState: TRIP_DATA_INITIAL_STATE,
    reducers: {
        setOrigin: (state, {payload}: PayloadAction<IPlace | undefined>) => {
            state.origin = payload;
        },
        setDestination: (state, {payload}: PayloadAction<IPlace | undefined>) => {
            state.destination = payload;
        },
        setDistanceDurationData: (state, {payload}: PayloadAction<IDistanceDurationData>) => {
            state.distanceDuration = payload;
        }
    }
});

export const {
    setOrigin: setOriginActionCreator,
    setDestination: setDestinationActionCreator,
    setDistanceDurationData: setDistanceDurationDataActionCreator
} = tripDataSlice.actions;