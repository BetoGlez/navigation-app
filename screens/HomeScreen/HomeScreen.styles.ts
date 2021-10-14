import { StyleSheet } from "react-native";
import { Styles } from "react-native-google-places-autocomplete";

export const homeScreenStyles = StyleSheet.create({
    uberLogo: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    container: {
        flex: 0
    }
});

export const searchBarStyles: Partial<Styles> = {
    container: {
        flex: 0,
        marginBottom: 16
    },
    textInput: {
        fontSize: 18
    }
};