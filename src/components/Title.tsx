import React from 'react';
import {useTheme} from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

export interface TitleProps {
    text: string;
    color?: string;
    noMargin?: boolean;
}

const Title = (props: TitleProps) => {
    const {text, color, noMargin} = props;
    const {colors} = useTheme();

    return (
        <Text
            style={[
                styles.title,
                {color: color || colors.text},
                noMargin && styles.noMargin,
            ]}
        >
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
    noMargin: {
        marginVertical: 0,
    },
});

export default Title;
