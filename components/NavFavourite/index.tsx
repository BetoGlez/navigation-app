import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import { IPlace } from "../../models/store-data.model";

export interface INavFavouriteProps {
    id: string;
    name: string;
    icon: string;
    place: IPlace;
}

const NavFavourite: React.FC<INavFavouriteProps> = ({place: {description}, name, icon}) => {
    return (
        <TouchableOpacity>
            <View style={tw`flex-row items-center p-5`}>
                <Icon name={icon} type="ionicon" color="white" size={18} style={tw`mr-4 rounded-full bg-gray-300 p-3`} />
                <View style={tw`flex-1`}>
                    <Text style={tw`font-semibold text-lg`}>{name}</Text>
                    <Text style={tw`text-gray-500`} numberOfLines={1}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default NavFavourite;
