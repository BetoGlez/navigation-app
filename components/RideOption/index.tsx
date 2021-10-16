import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import { rideOptionStyles } from "./RideOption.styles";
import { IDistanceDurationData, IRideOption } from "../../models/trip.model";
import AppConstants from "../../app-config";

interface IRideOptionProps {
    rideOption: IRideOption;
    selectedRideOptionId?: string;
    distanceDuration?: IDistanceDurationData;
    setSelectedRideOption: (rideOption: IRideOption) => void;
};

const RideOption: React.FC<IRideOptionProps> =
    ({rideOption, rideOption: {id, title, image, costMultiplier}, distanceDuration, selectedRideOptionId, setSelectedRideOption}) => {
    return (
        <TouchableOpacity style={tw`flex-row items-center justify-between px-5 ${(selectedRideOptionId === id) ? "bg-gray-200" : "" }`}
            onPress={() => setSelectedRideOption(rideOption)}>
            <Image source={image} style={rideOptionStyles.carImg} />
            <View style={tw`-ml-6`}>
                <Text style={tw`text-lg font-semibold`}>{title}</Text>
                <Text>{distanceDuration?.duration?.text || "Calculating"} Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>
                {AppConstants.CURRENCY_SYMBOL}
                {(((distanceDuration?.duration?.value || 0) * AppConstants.TRIP_CHARGE_RATE * costMultiplier) / 100).toFixed(2)}
            </Text>
        </TouchableOpacity>
    );
};

export default RideOption;
