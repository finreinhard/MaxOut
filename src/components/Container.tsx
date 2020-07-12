import React, {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";

const Container = (props: PropsWithChildren<{}>) => (
    <ScrollView>
        <SafeAreaView style={containerStyles.container}>
            {props.children}
        </SafeAreaView>
    </ScrollView>
);

export const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        marginTop: 64,
    },
    marginForTabBar: {
        marginBottom: 128,
    },
});

export default Container;
