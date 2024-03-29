import React, {useState} from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import Text from "./Text";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import {useTheme} from "@react-navigation/native";
import useSkills from "../store/skills/hook";
import {t} from "../translation/i18n";

interface ScoreInputProps {
    skillId: string;
}

const ScoreInput = (props: ScoreInputProps) => {
    const [score, setScore] = useState('');
    const {colors} = useTheme();
    const {createSet} = useSkills();
    const {skillId} = props;

    const handleSetCreation = async () => {
        if (isNaN(Number(score)) || Number(score) <= 0) {
            Alert.alert(t('skills:wrongInput', {score}))
            return;
        }

        createSet(skillId, Number(score));
        setScore('');
    };

    return (
        <View style={[styles.addSection, {backgroundColor: colors.card}]}>
            <View style={[styles.addContainer, {borderBottomColor: colors.border}]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <Text>{t('skills:addSet')}</Text>
                        <TextInput
                            style={styles.scoreInput}
                            onChangeText={setScore}
                            value={score}
                            keyboardType="number-pad"
                            placeholder={t('skills:score')}
                            placeholderTextColor="#bbb"
                        />
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </View>
            <Button
                icon={PlusIcon}
                iconSize={16}
                color={colors.primary}
                text={t('create')}
                onPress={handleSetCreation}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    addSection: {
        marginVertical: 32,
        borderRadius: 12,
    },
    addContainer: {
        padding: 16,
        borderBottomWidth: 2,
    },
    scoreInput: {
        fontSize: 38,
        color: '#fff',
    },
});

export default ScoreInput;
