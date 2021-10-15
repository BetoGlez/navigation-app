import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";

import { homeScreenStyles, searchBarStyles } from "./HomeScreen.styles";
import { useHomeScreen } from "./HomeScreen";
import NavOptions from "../../components/NavOptions";
import NavFavourites from "../../components/NavFavourites";
import AppConstants from "../../app-config";
import { PlaceDestinationTypeEnum } from "../../models/trip.model";

const HomeScreen: React.FC = () => {
    const { setOriginPlaceData } = useHomeScreen();

    return (
        <SafeAreaView style={tw`px-5 h-full`}>
            <Image source={require("../../assets/images/uber-logo.png")} style={homeScreenStyles.uberLogo} />
            <GooglePlacesAutocomplete
                placeholder="Where From?"
                nearbyPlacesAPI="GooglePlacesSearch"
                onPress={(setOriginPlaceData)}
                fetchDetails
                debounce={AppConstants.SEARCH_PLACES_DEBOUNCE_MS}
                minLength={AppConstants.SEARCH_PLACES_MIN_CHAR_LENGTH}
                enablePoweredByContainer={false}
                query={{key: GOOGLE_MAPS_API_KEY, language: "en"}}
                styles={searchBarStyles}
            />
            <NavOptions />
            <NavFavourites style={tw`mt-5`} placeType={PlaceDestinationTypeEnum.ORIGIN}/>
        </SafeAreaView>
    );
};

export default HomeScreen;