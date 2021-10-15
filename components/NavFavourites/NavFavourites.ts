import { IFavouritePlace } from "../../models/trip.model";

export const NAV_FAVOURITES: Array<IFavouritePlace> = [
    {
        id: "1",
        name: "Home",
        icon: "home",
        place: {
            description: "Cibeles, Plaza de Cibeles, Madrid, Spain",
            location: {
                lat: 40.4189339,
                lng: -3.6921521
            }
        }
    },
    {
        id: "2",
        name: "Work",
        icon: "briefcase",
        place: {
            description: "Santiago Bernabéu, Madrid, Spain",
            location: {
                lat: 40.45218930000001,
                lng: -3.690659
            }
        }
    }
];