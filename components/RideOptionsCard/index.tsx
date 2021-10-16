import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

import RideOptions from "../RideOptions";
import { RideOptsCardNavigation } from "../../routes/maps-navigation-stack";

const RideOptionsCard: React.FC = () => {
    const navigation = useNavigation<RideOptsCardNavigation>();

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={tw`absolute top-0 left-2 z-50 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center pb-5 text-lg`}>Select a Ride</Text>
            </View>
            <RideOptions />
        </SafeAreaView>
    );
};

export default RideOptionsCard;
