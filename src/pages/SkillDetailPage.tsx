import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Alert,
} from "react-native";
import {RouteProp, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../model/NavigationModel";
import SetSummary from "../components/SetSummary";
import useSkills from "../store/skills/hook";
import {containerStyles} from "../components/Container";
import {dangerColor} from "../utils/color";
import Button from "../components/Button";
import Text from "../components/Text";
import ScoreInput from "../components/ScoreInput";
import ListSeparator from "../components/ListSeparator";

interface OwnProps {
    navigation: StackNavigationProp<RootStackParamList, 'Details'>
    route: RouteProp<RootStackParamList, 'Details'>
}

const SkillDetailPage = (props: OwnProps) => {
    const {route, navigation} = props;
    const {id} = route.params;
    const {skills, deleteSkill} = useSkills();
    const {title, sets} = skills[id];
    const [highscore, setHighscore] = useState(0);
    const [isDeleted, setDeleted] = useState(false);
    const {colors} = useTheme();

    useEffect(() => {
        return () => {
            if (isDeleted) {
                deleteSkill(id);
            }
        }
    }, [navigation, isDeleted]);

    useEffect(() => {
        if (sets.length > 0) {
            setHighscore(sets.sort((setA, setB) => setB.score - setA.score)[0].score);
        }
    }, [sets, setHighscore]);

    const handleSkillDelete = () => Alert.alert(
        'Deleting Skill',
        `Are you sure, you want to delete the ${title} Skill. All your data will be lost!`,
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    navigation.navigate('Home');
                    setDeleted(true);
                },
            },
        ],
    );

    return (
        <FlatList
            style={styles.container}
            data={sets.sort((setA, setB) => setB.timestamp - setA.timestamp)}
            ListHeaderComponent={() => (
                <>
                    {sets.length > 0 && (
                        <View style={[styles.highscoreContainer, {borderColor: colors.primary}]}>
                            <Text style={[styles.highscoreNumber, {color: colors.primary}]}>{highscore}</Text>
                            <Text style={[styles.highscoreTitle, {color: colors.primary}]}>Your Best</Text>
                        </View>
                    )}
                    <ScoreInput skillId={id} />
                    {sets.length > 0 && (
                        <View
                            style={[
                                styles.setsHeader,
                                {
                                    backgroundColor: colors.card,
                                    borderColor: colors.border,
                                },
                            ]}
                        >
                            <Text>Last Activities</Text>
                        </View>
                    )}
                </>
            )}
            renderItem={({item: set}) => (
                <SetSummary
                    set={set}
                    isHighscore={set.score === highscore}
                />
            )}
            ItemSeparatorComponent={ListSeparator}
            ListFooterComponent={() => (
                <>
                    {sets.length > 0 && (
                        <View
                            style={[
                                styles.setsFooter,
                                {
                                    backgroundColor: colors.card,
                                    borderColor: colors.border,
                                },
                            ]}
                        >
                            <Text>
                                {`${sets.length} sets with ${sets.reduce((previousValue, currentValue) => previousValue + currentValue.score, 0)} repititions in total.`}
                            </Text>
                        </View>
                    )}
                    <View style={containerStyles.marginForTabBar}>
                        <Button
                            color={dangerColor}
                            text="Delete Skill"
                            onPress={handleSkillDelete}
                        />
                    </View>
                </>
            )}
        />
    );
}

const styles = StyleSheet.create({
    menuAddButton: {
        marginRight: 16,
    },
    container: {
        padding: 16,
    },
    highscoreContainer: {
        alignSelf: 'center',
        flexDirection: 'column',
        borderWidth: 10,
        borderRadius: 100,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    highscoreNumber: {
        textAlign: 'center',
        fontSize: 64,
        fontWeight: 'bold',
    },
    highscoreTitle: {
        fontSize: 24,
    },
    setsHeader: {
        borderBottomWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 16,
    },
    setsFooter: {
        borderTopWidth: 1,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
});

export default SkillDetailPage;
