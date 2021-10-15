import React from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";

import { NAV_FAVOURITES } from "./NavFavourites";
import NavFavourite from "../NavFavourite";
import LineSeparator from "../common/LineSeparator";
import { PlaceDestinationTypeEnum } from "../../models/trip.model";

interface INavFavouritesProps {
    placeType: PlaceDestinationTypeEnum;
    style?: StyleProp<ViewStyle>;
};

const NavFavourites: React.FC<INavFavouritesProps> = ({placeType, style}) => {
    return (
        <FlatList
            data={NAV_FAVOURITES}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={LineSeparator}
            renderItem={({item}) => (<NavFavourite favouritePlace={item} placeType={placeType}/>)}
            style={style}
        />
    );
};

export default NavFavourites;
