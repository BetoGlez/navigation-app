import React from "react";
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import { navOptionStyles } from "./NavOption.styles";
import { AppScreensStack, ScreenProp } from "../../routes/config";

export interface INavOptionProps {
    id: string;
    title: string;
    image: ImageSourcePropType;
    screen: keyof AppScreensStack;
};

const NavOption: React.FC<INavOptionProps> = ({title, image, screen}) => {
    const navigation = useNavigation<ScreenProp>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 rounded`}>
            <View>
                <Image source={image} style={navOptionStyles.optionImg} />
                <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
                <Icon name="arrowright" type="antdesign" color="white" style={tw`mt-4 p-2 bg-black rounded-full w-10`} />
            </View>
        </TouchableOpacity>
    );
};

export default NavOption;
