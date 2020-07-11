import React from 'react';
import {Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import SkillSummary from "../components/SkillSummary";
import {SkillSummaryModel} from "../model/SkillSummaryModel";
import ListSeparator from "../components/ListSeparator";
import useSkills from "../store/skills/hook";

const HomePage = () => {
    const {skills, createSkill} = useSkills();

    const data = Object
        .keys(skills)
        .map((id: string): SkillSummaryModel => {
            const highscoreList = skills[id].sets
                .sort((setA, setB) => setB.score - setA.score);
            const lastSets = skills[id].sets
                .map(set => ({lastRepetition: set.timestamp, lastScore: set.score}))
                .sort((setA, setB) => setB.lastRepetition - setA.lastRepetition);

            return {
                id,
                title: skills[id].title,
                highscore: highscoreList.length > 0 ? highscoreList[0].score : 0,
                ...lastSets.length > 0 ? lastSets[0] : {lastScore: 0},
            };
        })
        .sort((skillA, skillB) => (skillB.lastRepetition || Date.now()) - (skillA.lastRepetition || Date.now()));

    const handleSetCreation = (title: string | undefined) => {
        if (title) {
            createSkill(title);
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
        margin: 16,
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
