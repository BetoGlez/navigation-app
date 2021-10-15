import React from "react";
import { View } from "react-native";

import tw from "tailwind-react-native-classnames";

const LineSeparator = () => {
    return (
        <View style={[tw`bg-gray-200`, { height: 1 }]} />
    );
};

export default LineSeparator;
