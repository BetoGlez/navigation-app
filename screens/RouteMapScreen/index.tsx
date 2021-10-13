import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import NavMap from "../../components/NavMap";

const RouteMapScreen: React.FC = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <NavMap />
            </View>
            <View style={tw`h-1/2 border border-solid border-gray-500`}>
                <Text>Map screen</Text>
            </View>
        </View>
    );
};

export default RouteMapScreen;

const styles = StyleSheet.create({});
