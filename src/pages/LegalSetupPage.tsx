import React from 'react';
import {Image, StyleSheet, Text} from "react-native";
import Button from "../components/Button";
import CheckIcon from "../components/icons/CheckIcon";
import useSetup from "../store/setup/hook";
import {useTheme} from "@react-navigation/native";
import Title from "../components/Title";
import Container from "../components/Container";
import LegalModalButtons from "../components/LegalModalButtons";

const LegalSetupPage = () => {
    const {acceptLegalStuff} = useSetup();
    const {colors} = useTheme();

    const handleAcceptButtonPress = () => acceptLegalStuff(true);

    return (
        <Container>
            <Image
                style={styles.illustration}
                source={require('../../assets/illustrations/legal.png')}
            />
            <Title text="MaxOut" />
            <Text style={[styles.info, {color: colors.text}]}>
                Nice to have you on board! First of all we have to manage some legal stuff. Take your time to read
                our Privacy Policy and the Terms of Service carefully.
            </Text>
            <LegalModalButtons />
            <Button
                onPress={handleAcceptButtonPress}
                text="Accept All"
                center
                color={colors.primary}
                icon={CheckIcon}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    illustration: {
        width: '100%',
        height: 300,
    },
    info: {
        fontSize: 18,
        marginBottom: 16,
    },
});

export default LegalSetupPage;
