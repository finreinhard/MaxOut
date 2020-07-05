import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import Button from "../components/Button";
import colors from "../utils/color";
import PrivacyIcon from "../components/icons/PrivacyIcon";
import CheckIcon from "../components/icons/CheckIcon";
import TextIcon from "../components/icons/TextIcon";
import useModalState from "../hooks/useModalState";
import PrivacyPolicyModal from "../components/PrivacyPolicyModal";
import AdocView from "react-native-adoc/lib";

const LegalSetup = () => {
    const [privacyPolicyVisible, setPrivacyPolicyVisible] = useState(false);
    const [termsOfServiceVisible, setTermsOfServiceVisible] = useModalState(false);

    const showPrivacyPolicy = () => {
        setTermsOfServiceVisible(false);
        setPrivacyPolicyVisible(true);
    };

    const showTermsOfService = () => {
        setPrivacyPolicyVisible(false);
        setTermsOfServiceVisible(true);
    };

    const acceptLegalStuff = () => {
        alert('Accepted');
    };

    useEffect(() => {
        console.log({privacyPolicyVisible});
    }, [privacyPolicyVisible]);

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.illustration}
                    source={require('../../assets/illustrations/legal.png')}
                />
                <Text style={styles.title}>MaxOut</Text>
                <Text style={styles.info}>
                    Nice to have you on board! First of all we have to manage some legal stuff. Take your time to read
                    our Privacy Policy and the Terms of Service carefully.
                </Text>
                <AdocView/>
                <Button
                    onPress={showPrivacyPolicy}
                    text="Privacy Policy"
                    icon={PrivacyIcon}
                />
                <Button
                    onPress={showTermsOfService}
                    text="Terms of Service"
                    icon={TextIcon}
                />
                <Button
                    onPress={acceptLegalStuff}
                    text="Accept All"
                    center
                    color={colors.primary}
                    icon={CheckIcon}
                />
                <PrivacyPolicyModal
                    visible={privacyPolicyVisible}
                    setVisible={setPrivacyPolicyVisible}
                />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        marginTop: 64,
    },
    illustration: {
        width: '100%',
        height: 300,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 38,
        marginVertical: 16,
    },
    info: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 16,
    }
});

export default LegalSetup;
