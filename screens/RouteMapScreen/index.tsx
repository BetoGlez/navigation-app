import React from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import NavMap from "../../components/NavMap";
import { MapsNavStackRoutes, MapsNavStack } from "../../routes/maps-navigation-stack";
import NavCard from "../../components/NavCard";
import RideOptionsCard from "../../components/RideOptionsCard";

const RouteMapScreen: React.FC = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <NavMap />
            </View>
            <View style={tw`h-1/2`}>
                <MapsNavStack.Navigator>
                    <MapsNavStack.Screen name={MapsNavStackRoutes.NAV_CARD} component={NavCard} options={{headerShown: false}} />
                    <MapsNavStack.Screen name={MapsNavStackRoutes.RIDE_OPTS_CARD} component={RideOptionsCard} options={{headerShown: false}} />
                </MapsNavStack.Navigator>
            </View>
        </View>
    );
};

export default RouteMapScreen;

const styles = StyleSheet.create({});
