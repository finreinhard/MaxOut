import React from 'react';
import Button from "../components/Button";
import CheckIcon from "../components/icons/CheckIcon";
import useSetup from "../store/setup/hook";
import {useTheme} from "@react-navigation/native";
import Title from "../components/Title";
import Container from "../components/Container";
import LegalModalButtons from "../components/LegalModalButtons";
import Text from "../components/Text";
import Illustration from "../components/Illustration";

const LegalSetupPage = () => {
    const {acceptLegalStuff} = useSetup();
    const {colors} = useTheme();

    const handleAcceptButtonPress = () => acceptLegalStuff(true);

    return (
        <Container>
            <Illustration source={require('../../assets/illustrations/legal.png')} />
            <Title text="MaxOut" />
            <Text withMargin>
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

export default LegalSetupPage;
