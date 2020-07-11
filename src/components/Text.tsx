import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text as NativeText, TextStyle} from 'react-native';
import {useTheme} from "@react-navigation/native";

interface TextProps {
    style?: StyleProp<TextStyle>;
}

const Text = (props: PropsWithChildren<TextProps>) => {
    const {children, style} = props;
    const {colors} = useTheme();

    return (
        <NativeText style={[styles.text, {color: colors.text}, style]}>
            {children}
        </NativeText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginVertical: 8,
    },
});

export default Text;
