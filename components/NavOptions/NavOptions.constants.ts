import { INavOptionProps } from "../NavOption";
import { AppScreens } from "../../routes/config";

export const NAV_OPTIONS_DATA: Array<INavOptionProps> = [
    {
        id: "1",
        title: "Get a ride",
        image: require("../../assets/images/uberx.png"),
        screen: AppScreens.ROUTE_MAP
    },
    {
        id: "2",
        title: "Order food",
        image: require("../../assets/images/food.png"),
        screen: AppScreens.EATS
    }
];