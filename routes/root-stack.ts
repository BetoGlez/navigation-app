import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

// Root stack type
export type RootStackParamList = {
    Home: undefined;
    RouteMap: undefined;
    Eats: undefined;
};

// Root screens (should match RootStackParamList key names)
export enum RootStackRoutes {
    HOME = "Home",
    ROUTE_MAP = "RouteMap",
    EATS = "Eats"
};

// Screen navigation
export type HomeScreenNavigation = StackNavigationProp<RootStackParamList, "Home">;
export type RouteMapScreenNavigation = StackNavigationProp<RootStackParamList, "RouteMap">;

// Root stack
export const RootStack = createStackNavigator<RootStackParamList>();