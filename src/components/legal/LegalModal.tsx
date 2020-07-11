import React from 'react';
import {Modal, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import Button from "../Button";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import {useTheme} from "@react-navigation/native";
import {dangerColor} from "../../utils/color";

interface LegalModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    contentType: 'PRIVACY_POLICY' | 'TERMS_OF_SERVICE';
}

const LegalModal = (props: LegalModalProps) => {
    const {visible, setVisible, contentType} = props;
    const {colors} = useTheme();

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
            <ScrollView style={{backgroundColor: colors.background}}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.closeButton}>
                        <TextTag
                            styles={{
                                title: [styles.title, {color: colors.primary}],
                                text: styles.text,
                                sectionTitle: [styles.sectionTitle, {color: colors.primary}],
                                danger: {color: dangerColor},
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
    safeArea: {
        flex: 1,
        margin: 16,
        marginTop: 64,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginTop: 12,
        color: '#fff',
    },
    sectionTitle: {
        marginTop: 14,
        fontSize: 18,
    },
    closeButton: {
        marginTop: 18,
    },
});

export default LegalModal;
