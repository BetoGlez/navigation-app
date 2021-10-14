import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

// Stack type
export type MapsNavStackParamList = {
    NavCard: undefined;
    RideOptsCard: undefined;
};

// App screens (should match MapsNavStackParamList key names)
export enum MapsNavStackRoutes {
    NAV_CARD = "NavCard",
    RIDE_OPTS_CARD = "RideOptsCard"
};

// Navigation types
export type NavCardNavigation = StackNavigationProp<MapsNavStackParamList, "NavCard">;
export type RideOptsCardNavigation = StackNavigationProp<MapsNavStackParamList, "RideOptsCard">;

export const MapsNavStack = createStackNavigator<MapsNavStackParamList>();
