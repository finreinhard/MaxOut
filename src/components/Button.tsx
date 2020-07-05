import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import colors from "../utils/color";
import {IconProps} from "../model/IconProps";

interface ButtonProps {
    text: string;
    onPress: () => void;
    color?: string,
    center?: boolean,
    icon?: React.FunctionComponent<IconProps>,
}

const Button = (props: ButtonProps) => {
    const {
        text,
        color,
        center,
        icon: IconTag,
        onPress,
    } = props;

    return (
        <TouchableHighlight
            style={[styles.container, center && styles.center]}
            onPress={onPress}
            underlayColor="#404040"
        >
            <React.Fragment>
                {IconTag && (
                    <View style={styles.icon}>
                        <IconTag color={color} size={24} />
                    </View>
                )}
                <Text style={[styles.text, {color: color || '#fff'}]}>
                    {text}
                </Text>
            </React.Fragment>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.foreground,
        borderRadius: 12,
        marginVertical: 6,
        padding: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
    },
    icon: {
        marginRight: 12,
    },
    text: {
        fontSize: 18,
    },
});

export default Button;
