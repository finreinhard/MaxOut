import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button, SafeAreaView, Alert} from "react-native";
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../model/NavigationModel";
import SetSummary from "../components/SetSummary";
import ListSeparator from "../components/ListSeparator";
import useModalState from "../hooks/useModalState";
import CreateSetModal from "../components/CreateSetModal";
import useSkills from "../store/skills/hook";

interface OwnProps {
    navigation: StackNavigationProp<RootStackParamList, 'Details'>
    route: RouteProp<RootStackParamList, 'Details'>
}

const orange = 'rgb(255, 149, 0)';

const SkillDetailPage = (props: OwnProps) => {
    const {route, navigation} = props;
    const {id} = route.params;
    const {skills, deleteSkill} = useSkills();
    const {title, sets} = skills[id];
    const [createSetIsVisible, setCreateSetIsVisible] = useModalState(false);
    const [highscore, setHighscore] = useState(0);
    const [lastScore, setLastScore] = useState(0);
    const [isDeleted, setDeleted] = useState(false);

    const handleAddSetButtonClick = () => {
        setCreateSetIsVisible(true);
    }

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
            setLastScore(sets.sort((setA, setB) => setB.timestamp - setA.timestamp)[0].score);
        }
    }, [sets, setHighscore, setLastScore]);

    useEffect(() => {
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
    }, [title, handleAddSetButtonClick]);

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

    const deleteSkillButton = (
        <Button
            color="rgb(255, 59, 48)"
            title="Delete Skill"
            onPress={handleSkillDelete}
        />
    );
    const createSetModal = (
        <CreateSetModal
            skillId={id}
            isOpen={createSetIsVisible}
            setIsOpen={setCreateSetIsVisible}
            lastScore={lastScore}
        />
    )

    if (sets.length === 0) {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.noEntries}>
                    <Text>Huh! Pretty empty here</Text>
                    <Button
                        title="Create your first set"
                        onPress={handleAddSetButtonClick}
                    />
                    {deleteSkillButton}
                </SafeAreaView>
                {createSetModal}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
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
            {deleteSkillButton}
            {createSetModal}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    noEntries: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
