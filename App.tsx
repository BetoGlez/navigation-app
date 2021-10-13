import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import store from "./store/config";
import { AppScreens, RootStack } from "./routes/config";
import HomeScreen from "./screens/HomeScreen";
import RouteMapScreen from "./screens/RouteMapScreen";
import EatsScreen from "./screens/EatsScreen";

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <SafeAreaProvider>
                    <RootStack.Navigator>
                        <RootStack.Screen name={AppScreens.HOME} component={HomeScreen} options={{headerShown: false}}/>
                        <RootStack.Screen name={AppScreens.ROUTE_MAP} component={RouteMapScreen} options={{headerShown: false}} />
                        <RootStack.Screen name={AppScreens.EATS} component={EatsScreen} />
                    </RootStack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
