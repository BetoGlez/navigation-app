import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import { rideOptionStyles } from "./RideOption.styles";
import { IDistanceDurationData, IRideOption } from "../../models/trip.model";

interface IRideOptionProps {
    rideOption: IRideOption;
    selectedRideOptionId?: string;
    distanceDuration?: IDistanceDurationData;
    setSelectedRideOption: (rideOption: IRideOption) => void;
};

const RideOption: React.FC<IRideOptionProps> =
    ({rideOption, rideOption: {id, title, image}, distanceDuration, selectedRideOptionId, setSelectedRideOption}) => {
    return (
        <TouchableOpacity style={tw`flex-row items-center justify-between px-5 ${(selectedRideOptionId === id) ? "bg-gray-200" : "" }`}
            onPress={() => setSelectedRideOption(rideOption)}>
            <Image source={image} style={rideOptionStyles.carImg} />
            <View style={tw`-ml-6`}>
                <Text style={tw`text-lg font-semibold`}>{title}</Text>
                <Text>{distanceDuration?.duration.text || "Calculating"} Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>€21</Text>
        </TouchableOpacity>
    );
};

export default RideOption;
