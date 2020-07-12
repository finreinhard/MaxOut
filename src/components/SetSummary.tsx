import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SkillSetModel} from "../store/skills/types";
import useRelativeTime from "../hooks/useRelativeTime";
import {useTheme} from "@react-navigation/native";
import Text from "./Text";

interface OwnProps {
    set: SkillSetModel;
    isHighscore?: boolean;
}

const SetSummary = (props: OwnProps) => {
    const {set, isHighscore} = props;
    const {colors} = useTheme();
    const relativeTime = useRelativeTime(set.timestamp);
    const isHighscoreStyle = isHighscore && {color: colors.primary};

    return (
        <View style={[styles.container, {backgroundColor: colors.card}]}>
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
});

export default SetSummary;
