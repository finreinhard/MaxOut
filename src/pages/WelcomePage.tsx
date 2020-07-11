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

const WelcomePage = () => {
    const {completeSetup} = useSetup();
    const {colors} = useTheme();

    const handleGetStartedPress = () => completeSetup();

    return (
        <Container>
            <Title text="MaxOut" />
            <FeatureCell
                title="Keep Track"
                description="Every repitition counts. So it is important to not loose the overview."
                icon={GraphIcon}
            />
            <FeatureCell
                title="Get Notified"
                description="Sometimes motivation is hard. We can help you to build up a streak."
                icon={BellIcon}
            />
            <FeatureCell
                title="Privacy"
                description="Like the gorgeous OutRun App by the second best developer, we value privacy."
                icon={PrivacyIcon}
            />
            <Button
                icon={CheckIcon}
                text="Get Started"
                onPress={handleGetStartedPress}
                color={colors.primary}
            />
        </Container>
    );
};

export default WelcomePage;
