import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import FeatureCell from "../components/FeatureCell";
import PrivacyIcon from "../components/icons/PrivacyIcon";
import Button from "../components/Button";
import useSetup from "../store/setup/hook";
import colors from "../utils/color";
import GraphIcon from "../components/icons/GraphIcon";
import BellIcon from "../components/icons/BellIcon";
import CheckIcon from "../components/icons/CheckIcon";

const WelcomePage = () => {
    const {completeSetup} = useSetup();

    const handleGetStartedPress = () => completeSetup();

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>MaxOut</Text>
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
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
        marginTop: 64,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 38,
        marginVertical: 16,
    }
});

export default WelcomePage;
