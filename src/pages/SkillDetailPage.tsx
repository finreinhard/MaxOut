import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../model/NavigationModel";
import {useGlobalStore} from "../store";
import SetSummary from "../components/SetSummary";
import ListSeparator from "../components/ListSeparator";
import useModalState from "../hooks/useModalState";
import CreateSetModal from "../components/CreateSetModal";

interface OwnProps {
    navigation: StackNavigationProp<RootStackParamList, 'Details'>
    route: RouteProp<RootStackParamList, 'Details'>
}

const orange = 'rgb(255, 149, 0)';

const SkillDetailPage = (props: OwnProps) => {
    const {route, navigation} = props;
    const {id} = route.params;
    const {state} = useGlobalStore();
    const {title, sets} = state.skills[id];
    const [createSetIsVisible, setCreateSetIsVisible] = useModalState(false);
    const [highscore, setHighscore] = useState(-1);
    const [lastScore, setLastScore] = useState(-1);

    useEffect(() => {
        setHighscore(sets.sort((setA, setB) => setB.score - setA.score)[0].score);
        setLastScore(sets.sort((setA, setB) => setB.timestamp - setA.timestamp)[0].score);
    }, [sets, setHighscore, setLastScore]);

    React.useEffect(() => {
        const handleAddSetButtonClick = () => {
            setCreateSetIsVisible(true);
        }

        navigation.setOptions({
            title,
            headerRight: ({tintColor}) => (
                <Button
                    onPress={handleAddSetButtonClick}
                    title="Add Set"
                    color={tintColor}
                />
            )
        });
    }, [title, setCreateSetIsVisible]);

    return (
        <View style={styles.container}>
            <View style={styles.highscoreContainer}>
                <Text style={styles.highscoreNumber}>{highscore}</Text>
                <Text style={styles.highscoreTitle}>Your Best</Text>
            </View>
            <Text style={styles.lastActivitiesLabel}>Last Activities</Text>
            <FlatList
                data={sets.sort((setA, setB) => setB.timestamp - setA.timestamp)}
                renderItem={({item: set}) => (
                    <SetSummary
                        set={set}
                        isHighscore={set.score === highscore}
                    />
                )}
                ItemSeparatorComponent={ListSeparator}
            />
            <CreateSetModal
                isOpen={createSetIsVisible}
                setIsOpen={setCreateSetIsVisible}
                lastScore={lastScore}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    highscoreContainer: {
        marginVertical: 50,
        alignSelf: 'center',
        flexDirection: 'column',
        borderWidth: 10,
        borderColor: orange,
        borderRadius: 100,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    highscoreNumber: {
        color: orange,
        textAlign: 'center',
        fontSize: 64,
        fontWeight: 'bold',
    },
    highscoreTitle: {
        color: orange,
        fontSize: 24,
    },
    lastActivitiesLabel: {
        color: '#666',
        fontSize: 18,
        padding: 16,
    }
});

export default SkillDetailPage;
