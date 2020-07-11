import React from 'react';
import {IconProps} from "../model/IconProps";
import {StyleSheet, View} from "react-native";
import Text from "./Text";

interface FeatureCellProps {
    title: string;
    description: string;
    icon: React.FunctionComponent<IconProps>,
}

const FeatureCell = (props: FeatureCellProps) => {
    const {title, description, icon: IconTag} = props;

    return (
        <View style={styles.container}>
            <IconTag size={48} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 16,
    },
    title: {
        fontWeight: 'bold',
    },
})

export default FeatureCell;
