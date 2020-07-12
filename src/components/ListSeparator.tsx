import React from 'react';
import {View, StyleSheet} from "react-native";
import {useTheme} from "@react-navigation/native";

const ListSeparator = () => {
    const {colors} = useTheme();

    return (
        <View style={[styles.separator, {backgroundColor: colors.border}]} />
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
    },
});

export default ListSeparator;
