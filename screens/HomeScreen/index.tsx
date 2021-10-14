import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";

import { homeScreenStyles, searchBarStyles } from "./HomeScreen.styles";
import { useHomeScreen } from "./HomeScreen";
import NavOptions from "../../components/NavOptions";
import AppConstants from "../../app-config";

const HomeScreen: React.FC = () => {
    const { setOriginPlaceData } = useHomeScreen();

    return (
        <SafeAreaView style={tw`h-full`}>
            <View style={tw`px-5`}>
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
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;