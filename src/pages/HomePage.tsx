import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from "react-native";
import SkillSummary from "../components/SkillSummary";
import {SkillSummaryModel} from "../model/SkillModel";
import {useGlobalStore} from "../store";
import ListSeparator from "../components/ListSeparator";

const HomePage = () => {
    const {state} = useGlobalStore();

    const data = Object.keys(state.skills).map((id: string) => ({
        id,
        title: state.skills[id].title,
        highscore: state.skills[id].sets.sort((setA, setB) => setB.score - setA.score)[0].score,
        ...state.skills[id].sets
            .map(set => ({lastRepetition: set.timestamp, lastScore: set.score}))
            .sort((setA, setB) => setB.lastRepetition - setA.lastRepetition)[0],
    }));

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Max Out</Text>
            <FlatList
                data={data}
                renderItem={({item}) => <SkillSummary item={item} />}
                keyExtractor={(item: SkillSummaryModel) => item.id}
                ItemSeparatorComponent={ListSeparator}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        margin: 15,
        color: '#000',
        fontSize: 42,
        fontWeight: 'bold',
    },
});


export default HomePage;
