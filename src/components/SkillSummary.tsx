import React from 'react';
import {View, StyleSheet, TouchableHighlight} from "react-native";
import moment from "moment";
import {useNavigation, useTheme} from '@react-navigation/native'
import {SkillSummaryModel} from "../model/SkillSummaryModel";
import {changeLuminance} from "../utils/color";
import Text from "./Text";
import {getLastDays} from "../utils/date";

interface OwnProps {
    item: SkillSummaryModel;
    daysShown: number;
}

const SkillSummary = (props: OwnProps) => {
    const {daysShown, item} = props;
    const {id, title, highscore, lastSets} = item;
    const navigation = useNavigation();
    const {colors} = useTheme();

    const since = lastSets.length ? moment(lastSets[0].timestamp).fromNow(false) : 'No Data';

    return (
        <TouchableHighlight
            style={[styles.container, {backgroundColor: colors.card}]}
            activeOpacity={.8}
            underlayColor={changeLuminance(colors.card, .2)}
            onPress={() => navigation.navigate('SkillDetail', {id})}
        >
            <React.Fragment>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text>{since}</Text>
                    </View>
                </View>
                {lastSets.length !== 0 && (
                    <View style={styles.history}>
                        <View style={styles.dayBlock}>
                            <Text style={{color: colors.primary}}>Highscore</Text>
                            <Text style={[styles.dayScore, {color: colors.primary}]}>{highscore}</Text>
                        </View>
                        <View style={[styles.separator, {backgroundColor: colors.text}]} />
                        {getLastDays(daysShown).map((day, index) => {
                            const dayScore = lastSets
                                .filter(set => moment(set.timestamp)
                                    .isSame(moment().subtract(index, 'days'), 'day'))
                                .sort((setA, setB) => setB.score - setA.score)
                                .map(set => set.score)
                                .find(() => true);

                            return (
                                <View
                                    key={day}
                                    style={styles.dayBlock}
                                >
                                    <Text>{day}</Text>
                                    <Text style={[styles.dayScore, dayScore === highscore && {color: colors.primary}]}>
                                        {dayScore || '-'}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                )}
            </React.Fragment>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 12,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
    },
    title: {
        fontWeight: 'bold',
    },
    history: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 16,
    },
    dayBlock: {
        alignItems: 'center',
    },
    separator: {
        width: 1,
        height: '100%',
    },
    dayScore: {
        marginTop: 2,
        fontWeight: 'bold',
    },
});

export default SkillSummary;
