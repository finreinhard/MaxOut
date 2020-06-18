import React from 'react';
import {Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import SkillSummary from "../components/SkillSummary";
import {SkillSummaryModel} from "../model/SkillSummaryModel";
import {useGlobalStore} from "../store";
import ListSeparator from "../components/ListSeparator";
import {createSkill} from "../store/skills/actions";
import {uuidv4} from "../utils/uuid";

const HomePage = () => {
    const {state, dispatch} = useGlobalStore();

    const data = Object.keys(state.skills).map((id: string) => {

        const highscoreList = state.skills[id].sets
            .sort((setA, setB) => setB.score - setA.score);
        const lastSets = state.skills[id].sets
            .map(set => ({lastRepetition: set.timestamp, lastScore: set.score}))
            .sort((setA, setB) => setB.lastRepetition - setA.lastRepetition);

        return {
            id,
            title: state.skills[id].title,
            highscore: highscoreList.length > 0 ? highscoreList[0].score : 0,
            ...lastSets.length > 0 ? lastSets[0] : {lastScore: 0},
        };
    });

    const handleSetCreation = async (title: string | undefined) => {
        if (title) {
            dispatch(createSkill(await uuidv4(), title));
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.title}>Max Out</Text>
                    <Button
                        title="Create"
                        onPress={() => Alert.prompt(
                            'Create a set',
                            'Give your new set a title.',
                            [
                                {
                                    text: 'Cancel',
                                    style: 'cancel',
                                },
                                {
                                    text: 'Create',
                                    onPress: handleSetCreation,
                                },
                            ],
                        )}
                    />
                </View>
            </SafeAreaView>
            <FlatList
                data={data}
                renderItem={({item}) => <SkillSummary item={item} />}
                keyExtractor={(item: SkillSummaryModel) => item.id}
                ItemSeparatorComponent={ListSeparator}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        margin: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    title: {
        color: '#000',
        fontSize: 42,
        fontWeight: 'bold',
    },
});


export default HomePage;
