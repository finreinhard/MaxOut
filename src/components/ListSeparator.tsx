import React from 'react';
import {View, StyleSheet} from "react-native";

const ListSeparator = () => {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ddd',
    },
});

export default ListSeparator;
