import React from "react";
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import { navOptionStyles } from "./NavOption.styles";
import { AppScreens, HomeScreenNavigation } from "../../routes/config";
import { useTrip } from "../../hooks/trips/trips-hooks";

export interface INavOptionProps {
    id: string;
    title: string;
    image: ImageSourcePropType;
    screen: AppScreens;
};

const NavOption: React.FC<INavOptionProps> = ({title, image, screen}) => {
    const navigation = useNavigation<HomeScreenNavigation>();
    const {origin} = useTrip();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)} disabled={!origin}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 rounded`}>
            <View style={tw`${!origin ? "opacity-40" : ""}`}>
                <Image source={image} style={navOptionStyles.optionImg} />
                <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
                <Icon name="arrowright" type="antdesign" color="white" style={tw`mt-4 p-2 bg-black rounded-full w-10`} />
            </View>
        </TouchableOpacity>
    );
};

export default NavOption;
