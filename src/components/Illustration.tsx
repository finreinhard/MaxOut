import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from "react-native";

interface IllustrationProps {
    source: ImageSourcePropType;
}

const Illustration = (props: IllustrationProps) => (
    <Image source={props.source} style={styles.illustration} />
);

const styles = StyleSheet.create({
    illustration: {
        width: '100%',
        height: 300,
    },
});

export default Illustration;
