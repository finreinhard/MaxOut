import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {IconProps} from "../model/IconProps";
import {useTheme} from "@react-navigation/native";
import {changeLuminance} from "../utils/color";

interface ButtonProps {
    text: string;
    onPress: () => void;
    color?: string,
    center?: boolean,
    icon?: React.FunctionComponent<IconProps>,
    iconSize?: number;
    small?: boolean;
}

const Button = (props: ButtonProps) => {
    const {
        text,
        color,
        center,
        icon: IconTag,
        iconSize,
        onPress,
        small,
    } = props;
    const {colors} = useTheme();

    return (
        <TouchableHighlight
            style={[
                styles.container,
                {backgroundColor: colors.card},
                center && styles.center,
                small && styles.small,
            ]}
            onPress={onPress}
            underlayColor={changeLuminance(colors.card, .2)}
        >
            <React.Fragment>
                {IconTag && (
                    <View style={{marginRight: (iconSize || 24) / 2}}>
                        <IconTag color={color} size={iconSize || 24} />
                    </View>
                )}
                <Text style={[styles.text, {color: color || colors.text}]}>
                    {text}
                </Text>
            </React.Fragment>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        marginVertical: 6,
        padding: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    small: {
       marginVertical: 0,
       paddingVertical: 0,
    },
    center: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    },
});

export default Button;
