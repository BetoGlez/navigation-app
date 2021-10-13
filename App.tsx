import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import tw from "tailwind-react-native-classnames";

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
                    <SafeAreaView style={tw`bg-white h-full`}>
                        <RootStack.Navigator>
                            <RootStack.Screen name={AppScreens.HOME} component={HomeScreen} options={{headerShown: false}}/>
                            <RootStack.Screen name={AppScreens.ROUTE_MAP} component={RouteMapScreen} />
                            <RootStack.Screen name={AppScreens.EATS} component={EatsScreen} />
                        </RootStack.Navigator>
                    </SafeAreaView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
