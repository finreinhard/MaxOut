import React from 'react';
import {Modal, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import colors from "../../utils/color";
import Button from "../Button";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

interface LegalModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    contentType: 'PRIVACY_POLICY' | 'TERMS_OF_SERVICE';
}

const LegalModal = (props: LegalModalProps) => {
    const {visible, setVisible, contentType} = props;

    const closeModal = () => setVisible(false);

    let TextTag;

    switch (contentType) {
        case "PRIVACY_POLICY":
            TextTag = PrivacyPolicy;
            break;
        case "TERMS_OF_SERVICE":
            TextTag = TermsOfService;
            break;
    }

    return (
        <Modal
            visible={visible}
            onRequestClose={closeModal}
            animationType="fade"
            presentationStyle="fullScreen"
            hardwareAccelerated
        >
            <ScrollView style={styles.container}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.closeButton}>
                        <TextTag
                            styles={{
                                title: styles.title,
                                text: styles.text,
                                sectionTitle: styles.sectionTitle,
                                danger: styles.danger,
                            }}
                        />
                        <Button
                            text="Close"
                            onPress={closeModal}
                            color={colors.primary}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    safeArea: {
        flex: 1,
        margin: 16,
        marginTop: 64,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.primary,
    },
    text: {
        fontSize: 16,
        marginTop: 12,
        color: '#fff',
    },
    danger: {
        color: colors.danger,
    },
    sectionTitle: {
        marginTop: 14,
        fontSize: 18,
        color: colors.primary,
    },
    closeButton: {
        marginTop: 18,
    },
});

export default LegalModal;
