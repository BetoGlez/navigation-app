import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import { RIDE_OPTIONS, useRideOptions } from "./RideOptions";
import RideOption from "../RideOption";

const RideOptions = () => {
    const {distanceDuration, selectedRideOption, setSelectedRideOption} = useRideOptions();

    return (
        <>
            <FlatList
                data={RIDE_OPTIONS}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <RideOption rideOption={item} selectedRideOptionId={selectedRideOption?.id}
                    distanceDuration={distanceDuration} setSelectedRideOption={setSelectedRideOption}/>}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity style={tw`bg-black py-3 m-3 rounded ${!selectedRideOption ? "bg-gray-300" : ""}`}
                    disabled={!selectedRideOption}>
                    <Text style={tw`text-center text-white text-lg`}>Choose {selectedRideOption?.title}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default RideOptions;
