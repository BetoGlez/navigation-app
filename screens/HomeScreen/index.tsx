import React from "react";
import { Image, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import { homeScreenStyles } from "./HomeScreen.styles";
import NavOptions from "../../components/NavOptions";

const HomeScreen = () => {
    return (
        <View style={tw`px-5`}>
            <Image source={require("../../assets/images/uber-logo.png")} style={homeScreenStyles.uberLogo} />
            <NavOptions />
        </View>
    );
};

export default HomeScreen;