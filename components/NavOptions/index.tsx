import React from "react";
import { FlatList } from "react-native";

import { NAV_OPTIONS_DATA } from "./NavOptions.constants";
import NavOption from "../NavOption";

const NavOptions: React.FC = () => {
    return (
        <FlatList
            data={NAV_OPTIONS_DATA}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (<NavOption {...item}/>)}
        />
    );
};

export default NavOptions;
