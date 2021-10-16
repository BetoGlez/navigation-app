import React, { useState } from "react";
import { FlatList } from "react-native";

import { RIDE_OPTIONS } from "./RideOptions";
import RideOption from "../RideOption";
import { IRideOption } from "../../models/trip.model";

const RideOptions = () => {
    const [selectedRideOption, setSelectedRideOption] = useState<IRideOption>();

    return (
        <FlatList
            data={RIDE_OPTIONS}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <RideOption rideOption={item} selectedRideOptionId={selectedRideOption?.id}
                setSelectedRideOption={setSelectedRideOption}/>}
        />
    );
};

export default RideOptions;
