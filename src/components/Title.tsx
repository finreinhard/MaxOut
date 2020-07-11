import React from 'react';
import {useTheme} from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

export interface TitleProps {
    text: string;
    color?: string;
}

const Title = (props: TitleProps) => {
    const {text, color} = props;
    const {colors} = useTheme();

    return (
        <Text style={[styles.title, {color: color || colors.text}]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 38,
        marginVertical: 16,
    },
});

export default Title;
