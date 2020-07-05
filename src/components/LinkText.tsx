import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextProps, TouchableWithoutFeedback} from "react-native";
import {Linking} from "expo";

interface LinkTextProps {
    url: string;
}

const LinkText = (props: PropsWithChildren<LinkTextProps & TextProps>) => {
    const {url, children, ...textProps} = props;

    const handlePress = () => Linking.openURL(url);

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Text {...textProps}>{children}</Text>
        </TouchableWithoutFeedback>
    );
};

export default LinkText;
