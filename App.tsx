import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import store from "./store/config";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar style="auto" />
                <HomeScreen />
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
