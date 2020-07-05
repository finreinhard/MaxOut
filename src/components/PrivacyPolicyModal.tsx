import React from 'react';
import {Modal, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import colors from "../utils/color";
import Button from "./Button";

interface PrivacyPolicyModalProps {
    visible: boolean;
    setVisible: (isOpen: boolean) => void;
}

const PrivacyPolicyModal = (props: PrivacyPolicyModalProps) => {
    const {visible, setVisible} = props;

    const closeModal = () => setVisible(false);

    return (
        <Modal
            visible={visible}
            onRequestClose={closeModal}
            animationType="fade"
            presentationStyle="fullScreen"
        >
            <ScrollView style={styles.container}>
                <SafeAreaView style={styles.safeArea}>
                    <Text style={styles.title}>Privacy Policy</Text>
                    <Button
                        text="Close"
                        onPress={closeModal}
                        color={colors.primary}
                    />
                </SafeAreaView>
            </ScrollView>
        </Modal>
    );
};

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
});

export default PrivacyPolicyModal;
