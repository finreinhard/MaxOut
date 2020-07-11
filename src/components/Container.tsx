import React, {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";

const Container = (props: PropsWithChildren<{}>) => (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        marginTop: 64,
    },
});

export default Container;
