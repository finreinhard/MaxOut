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
import {t} from "../translation/i18n";

const LegalSetupPage = () => {
    const {acceptLegalStuff} = useSetup();
    const {colors} = useTheme();

    const handleAcceptButtonPress = () => acceptLegalStuff(true);

    return (
        <Container>
            <Illustration source={require('../../assets/illustrations/legal.minified.png')} />
            <Title text={t('title')} />
            <Text withMargin>{t('setup:welcomeMessage')}</Text>
            <LegalModalButtons />
            <Button
                onPress={handleAcceptButtonPress}
                text={t('setup:acceptAll')}
                center
                color={colors.primary}
                icon={CheckIcon}
            />
        </Container>
    );
}

export default LegalSetupPage;
