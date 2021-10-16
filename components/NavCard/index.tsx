import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_API_KEY } from "react-native-dotenv";

import { whereToSearchBarStyles } from "./NavCard.styles";
import { useNavCard } from "./NavCard";
import AppConstants from "../../app-config";
import NavFavourites from "../NavFavourites";
import { PlaceDestinationTypeEnum } from "../../models/trip.model";
import { MapsNavStackRoutes, NavCardNavigation } from "../../routes/maps-navigation-stack";

const NavCard: React.FC = () => {
    const navigation = useNavigation<NavCardNavigation>();
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
                <NavFavourites placeType={PlaceDestinationTypeEnum.DESTINATION}/>
            </View>
            <View style={tw`flex-row justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity onPress={() => navigation.navigate(MapsNavStackRoutes.RIDE_OPTS_CARD)}
                    style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`} >
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full border`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavCard;
