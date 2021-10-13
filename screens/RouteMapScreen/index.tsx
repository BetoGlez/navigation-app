import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import { useTrip } from "../../hooks/trips/trips-hooks";

const RouteMapScreen: React.FC = () => {
    const {origin} = useTrip();

    return (
        <View style={tw`p-5`}>
            <Text>Route map screen</Text>
            <Text>Origin data: {origin?.description}</Text>
        </View>
    );
};

export default RouteMapScreen;

const styles = StyleSheet.create({});
