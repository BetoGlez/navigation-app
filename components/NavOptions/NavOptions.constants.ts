import { INavOptionProps } from "../NavOption";
import { RootStackRoutes } from "../../routes/root-stack";

export const NAV_OPTIONS_DATA: Array<INavOptionProps> = [
    {
        id: "1",
        title: "Get a ride",
        image: require("../../assets/images/uberx.png"),
        screen: RootStackRoutes.ROUTE_MAP
    },
    {
        id: "2",
        title: "Order food",
        image: require("../../assets/images/food.png"),
        screen: RootStackRoutes.EATS
    }
];