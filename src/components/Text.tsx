import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text as NativeText, TextStyle} from 'react-native';
import {useTheme} from "@react-navigation/native";

interface TextProps {
    style?: StyleProp<TextStyle>;
    withMargin?: boolean;
}

const Text = (props: PropsWithChildren<TextProps>) => {
    const {children, style, withMargin} = props;
    const {colors} = useTheme();

    return (
        <NativeText style={[
            styles.text,
            {color: colors.text},
            withMargin && styles.withMargin,
            style,
        ]}>
            {children}
        </NativeText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
    withMargin: {
        marginVertical: 8,
    },
});

export default Text;
