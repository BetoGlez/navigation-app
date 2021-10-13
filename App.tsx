import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import tw from "tailwind-react-native-classnames";

import store from "./store/config";
import HomeScreen from "./screens/HomeScreen";
import RouteMapScreen from "./screens/RouteMapScreen";
import AppConstants from "./app-config";

const App = () => {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <SafeAreaProvider>
                    <SafeAreaView style={tw`bg-white h-full`}>
                        <Stack.Navigator>
                            <Stack.Screen name={AppConstants.AppScreens.HOME} component={HomeScreen} options={{headerShown: false}}/>
                            <Stack.Screen name={AppConstants.AppScreens.ROUTE_MAP} component={RouteMapScreen} />
                        </Stack.Navigator>
                    </SafeAreaView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
