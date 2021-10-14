import React from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";

import { whereToSearchBarStyles } from "./NavCard.styles";
import { useNavCard } from "./NavCard";
import AppConstants from "../../app-config";

const NavCard: React.FC = () => {
    const { setDestinationPlaceData } = useNavCard();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center text-lg pb-5`}>Good morning Beto</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        fetchDetails
                        onPress={setDestinationPlaceData}
                        minLength={AppConstants.SEARCH_PLACES_MIN_CHAR_LENGTH}
                        debounce={AppConstants.SEARCH_PLACES_DEBOUNCE_MS}
                        enablePoweredByContainer={false}
                        styles={whereToSearchBarStyles}
                        query={{key: GOOGLE_MAPS_API_KEY, language: "en"}}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavCard;
