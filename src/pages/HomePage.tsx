import React from 'react';
import {Alert, FlatList, StyleSheet, View} from "react-native";
import SkillSummary from "../components/SkillSummary";
import {SkillSummaryModel} from "../model/SkillSummaryModel";
import useSkills from "../store/skills/hook";
import {containerStyles} from "../components/Container";
import Title from "../components/Title";
import Illustration from "../components/Illustration";
import Text from "../components/Text";
import Button from "../components/Button";
import {useTheme} from "@react-navigation/native";
import PlusIcon from "../components/icons/PlusIcon";
import moment from "moment";
import {extractFirstOr, sortBy} from "../utils/array";
import {t} from "../translation/i18n";

// Maximum of 7
const daysShown = 5;

const HomePage = () => {
    const {skills, createSkill} = useSkills();
    const {colors} = useTheme();

    const data = sortBy(
        Object.entries(skills)
            .map(([id, value]): SkillSummaryModel => ({
                id,
                title: value.title,
                highscore: extractFirstOr(
                    sortBy(
                        value.sets,
                        (set) => set.score,
                        true,
                    ),
                    (set) => set.score,
                    0,
                ),
                lastSets: sortBy(
                    value.sets.filter((set) => moment().diff(set.timestamp, 'days') < daysShown),
                    (set) => set.timestamp,
                    true,
                ),
            })),
        (skill) => extractFirstOr(skill.lastSets, (set) => set.timestamp, Date.now()),
        true,
    );

    const handleCreateSkillPress = () => Alert.prompt(
        t('skills:create'),
        t('skills:createDescription'),
        [
            {
                text: t('cancel'),
                style: 'cancel',
            },
            {
                text: t('create'),
                onPress: (title: string | undefined) => {
                    if (title) {
                        createSkill(title);
                    }
                },
            },
        ],
    );

    return (
        <FlatList
            data={data}
            renderItem={({item}) => <SkillSummary item={item} daysShown={daysShown} />}
            keyExtractor={(item: SkillSummaryModel) => item.id}
            ListHeaderComponent={() => (
                <View style={styles.header}>
                    <Title text={t('title')} noMargin />
                    {data.length > 0 && (
                        <View>
                            <Button
                                small
                                iconSize={16}
                                icon={PlusIcon}
                                color={colors.primary}
                                text={t('create')}
                                onPress={handleCreateSkillPress}
                            />
                        </View>
                    )}
                </View>
            )}
            ListHeaderComponentStyle={containerStyles.container}
            ListEmptyComponent={() => (
                <View style={containerStyles.container}>
                    <Illustration source={require('../../assets/illustrations/empty_list.minified.png')} />
                    <Text withMargin>{t('skills:introText')}</Text>
                    <Button
                        icon={PlusIcon}
                        color={colors.primary}
                        text={t('skills:create')}
                        onPress={handleCreateSkillPress}
                    />
                </View>
            )}
            ListFooterComponent={() => (
                <View style={containerStyles.marginForTabBar} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
});


export default HomePage;
