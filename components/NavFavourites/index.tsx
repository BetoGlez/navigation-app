import React from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";

import { NAV_FAVOURITES } from "./NavFavourites";
import NavFavourite from "../NavFavourite";
import LineSeparator from "../common/LineSeparator";

interface INavFavouritesProps {
    style?: StyleProp<ViewStyle>;
};

const NavFavourites: React.FC<INavFavouritesProps> = ({style}) => {
    return (
        <FlatList
            data={NAV_FAVOURITES}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={LineSeparator}
            renderItem={({item}) => (<NavFavourite {...item}/>)}
            style={style}
        />
    );
};

export default NavFavourites;
