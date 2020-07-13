import React from 'react';
import FeatureCell from "../components/FeatureCell";
import PrivacyIcon from "../components/icons/PrivacyIcon";
import Button from "../components/Button";
import useSetup from "../store/setup/hook";
import GraphIcon from "../components/icons/GraphIcon";
import BellIcon from "../components/icons/BellIcon";
import CheckIcon from "../components/icons/CheckIcon";
import {useTheme} from "@react-navigation/native";
import Container from "../components/Container";
import Title from "../components/Title";
import {t} from "../translation/i18n";

const WelcomePage = () => {
    const {completeSetup} = useSetup();
    const {colors} = useTheme();

    const handleGetStartedPress = () => completeSetup();

    return (
        <Container>
            <Title text={t('title')} />
            <FeatureCell
                title={t('setup:keepTrack')}
                description={t('setup:keepTrackDescription')}
                icon={GraphIcon}
            />
            <FeatureCell
                title={t('setup:getNotified')}
                description={t('setup:getNotifiedDescription')}
                icon={BellIcon}
            />
            <FeatureCell
                title={t('setup:privacy')}
                description={t('setup:privacyDescription')}
                icon={PrivacyIcon}
            />
            <Button
                icon={CheckIcon}
                text={t('setup:getStarted')}
                onPress={handleGetStartedPress}
                color={colors.primary}
            />
        </Container>
    );
};

export default WelcomePage;
