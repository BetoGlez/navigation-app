import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TRIP_DATA_INITIAL_STATE } from "./tripData.constants";
import AppConstants from "../../app-config";

export const tripDataSlice = createSlice({
    name: AppConstants.ReduxSlices.TRIP_DATA_SLICE,
    initialState: TRIP_DATA_INITIAL_STATE,
    reducers: {
        setOrigin: (state, {payload}: PayloadAction<string>) => {
            state.origin = payload;
        },
        setDestination: (state, {payload}: PayloadAction<string>) => {
            state.destination = payload;
        },
        setTravelTimeInfo: (state, {payload}: PayloadAction<string>) => {
            state.travelTimeInfo = payload;
        }
    }
});

export const {
    setOrigin: setOriginActionCreator,
    setDestination: setDestinationActionCreator,
    setTravelTimeInfo: setTravelTimeInfoActionCreator
} = tripDataSlice.actions;