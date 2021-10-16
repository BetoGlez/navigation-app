import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, useWindowDimensions, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import NavMap from "../../components/NavMap";
import { MapsNavStackRoutes, MapsNavStack } from "../../routes/maps-navigation-stack";
import NavCard from "../../components/NavCard";
import RideOptionsCard from "../../components/RideOptionsCard";
import AppConstants from "../../app-config";
import { RootStackRoutes, RouteMapScreenNavigation } from "../../routes/root-stack";

const RouteMapScreen: React.FC = () => {
    const navigation = useNavigation<RouteMapScreenNavigation>();
    const { height } = useWindowDimensions();

    return (
        <KeyboardAvoidingView style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
            <View>
                <TouchableOpacity style={tw`absolute top-10 left-5 z-50 p-3 rounded-full bg-gray-100 shadow-xl`}
                    onPress={() => navigation.navigate(RootStackRoutes.HOME)}>
                    <Icon name="menu"/>
                </TouchableOpacity>
                <View style={tw`${height < AppConstants.LARGE_MIN_DEVICE_SCREEN_HEIGHT ? "h-1/3" : "h-1/2"}`}>
                    <NavMap />
                </View>
                <View style={tw`${height < AppConstants.LARGE_MIN_DEVICE_SCREEN_HEIGHT ? "h-2/3" : "h-1/2"}`}>
                    <MapsNavStack.Navigator>
                        <MapsNavStack.Screen name={MapsNavStackRoutes.NAV_CARD} component={NavCard} options={{headerShown: false}} />
                        <MapsNavStack.Screen name={MapsNavStackRoutes.RIDE_OPTS_CARD} component={RideOptionsCard} options={{headerShown: false}} />
                    </MapsNavStack.Navigator>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default RouteMapScreen;

const styles = StyleSheet.create({});
