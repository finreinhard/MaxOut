import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SkillSetModel} from "../model/SkillModel";
import useRelativeTime from "../hooks/useRelativeTime";

interface OwnProps {
    set: SkillSetModel;
    isHighscore?: boolean;
}

const SetSummary = (props: OwnProps) => {
    const {set, isHighscore} = props;
    const relativeTime = useRelativeTime(set.timestamp);
    const isHighscoreStyle = isHighscore && styles.isHighscore;

    return (
        <View style={styles.container}>
            <Text style={isHighscoreStyle}>{relativeTime}</Text>
            <Text style={isHighscoreStyle}>{set.score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    isHighscore: {
        color: 'rgb(255, 149, 9)',
    },
});

export default SetSummary;
