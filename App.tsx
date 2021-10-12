import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import tw from "tailwind-react-native-classnames";

import store from "./store/config";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar style="auto" />
            <SafeAreaProvider>
                <SafeAreaView style={tw`bg-white h-full`}>
                    <HomeScreen />
                </SafeAreaView>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
