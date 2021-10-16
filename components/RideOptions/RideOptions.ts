import { IRideOption } from "../../models/trip.model";

export const RIDE_OPTIONS: Array<IRideOption> = [
    {
        id: "uber-x",
        title: "Uber X",
        costMultiplier: 1,
        image: require("../../assets/images/uberx.png")
    },
    {
        id: "uber-xl",
        title: "Uber XL",
        costMultiplier: 1.2,
        image: require("../../assets/images/uberxl.png")
    },
    {
        id: "uber-lux",
        title: "Uber Lux",
        costMultiplier: 1.75,
        image: require("../../assets/images/uberlux.png")
    }
];