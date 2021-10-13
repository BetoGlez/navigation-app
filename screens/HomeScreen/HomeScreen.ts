import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

export const useHomeScreen = () => {
    const fetchPlaceData = (data: GooglePlaceData, detail: GooglePlaceDetail | null) => {
        console.log("Data: ", data);
        console.log("Detail: ", detail);
    };

    return { fetchPlaceData };
};