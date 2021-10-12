import { configureStore } from "@reduxjs/toolkit";

import { tripDataSlice } from "./trip-data/tripDataSlice";

const reducer = {
    tripData: tripDataSlice.reducer
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;