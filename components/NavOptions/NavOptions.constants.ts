import { INavOptionProps } from "../NavOption";
import AppConstants from "../../app-config";

export const NAV_OPTIONS_DATA: Array<INavOptionProps> = [
    {
        id: "1",
        title: "Get a ride",
        image: require("../../assets/images/uberx.png"),
        screen: AppConstants.AppScreens.ROUTE_MAP
    },
    {
        id: "2",
        title: "Order food",
        image: require("../../assets/images/food.png"),
        screen: AppConstants.AppScreens.EATS
    }
];