import React from "react";
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

import { navOptionStyles } from "./NavOption.styles";
import { Icon } from "react-native-elements";

export interface INavOptionProps {
    id: string;
    title: string;
    image: ImageSourcePropType;
    screen: string;
};

const NavOption: React.FC<INavOptionProps> = ({title, image}) => {
    return (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 rounded`}>
            <View>
                <Image source={image} style={navOptionStyles.optionImg} />
                <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
                <Icon name="arrowright" type="antdesign" color="white" style={tw`mt-4 p-2 bg-black rounded-full w-10`} />
            </View>
        </TouchableOpacity>
    );
};

export default NavOption;
