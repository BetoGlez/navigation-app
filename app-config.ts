import { EdgePadding } from "react-native-maps";

export default class AppConstants {
    public static readonly SEARCH_PLACES_DEBOUNCE_MS = 1000;
    public static readonly SEARCH_PLACES_MIN_CHAR_LENGTH = 2;
    public static readonly MAP_INITIAL_REGION_DELTA = 0.005;
    public static readonly MAP_DIRECTIONS_STROKE_WIDTH = 3;
    public static readonly MAP_DIRECTIONS_STROKE_COLOR = "black";
    public static readonly MAP_FIT_EDGE_PADDING: EdgePadding = {top: 50, right: 50, bottom: 50, left: 50};

    public static readonly ReduxSlices = {
        TRIP_DATA_SLICE: "tripDataSlice"
    };
};