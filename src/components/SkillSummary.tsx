import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import moment from "moment";
import {useNavigation} from '@react-navigation/native'
import {SkillSummaryModel} from "../model/SkillModel";

interface OwnProps {
    item: SkillSummaryModel;
}

const SkillSummary = (props: OwnProps) => {
    const {id, title, highscore, lastScore, lastRepetition} = props.item;
    const navigation = useNavigation();

    const since = moment(lastRepetition).fromNow(false);

    return (
        <TouchableHighlight
            style={styles.container}
            activeOpacity={.6}
            underlayColor="#ddd"
            onPress={() => navigation.navigate('SkillDetail', {id})}
        >
            <React.Fragment>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.since}>{since}</Text>
                </View>
                <View style={styles.statistic}>
                    <Text style={styles.lastScore}>{lastScore}</Text>
                    <Text style={styles.highscore}>{` / ${highscore}`}</Text>
                </View>
            </React.Fragment>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 26,
    },
    since: {
        color: '#999',
    },
    statistic: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    lastScore: {
        fontSize: 18,
    },
    highscore: {
        fontSize: 18,
        color: 'rgb(255, 149, 0)',
    },
});

export default SkillSummary;
