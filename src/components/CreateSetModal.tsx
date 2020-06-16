import React from 'react';
import {
    Button, Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput, TouchableWithoutFeedback,
    View
} from "react-native";

interface OwnProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    lastScore: number;
}

const CreateSetModal = (props: OwnProps) => {
    const {isOpen, setIsOpen, lastScore} = props;
    const lastScoreAsString = `${lastScore}`;
    const [score, setScore] = React.useState(lastScoreAsString);

    const closeModal = () => setIsOpen(false);

    return (
        <Modal
            animationType="slide"
            visible={isOpen}
            onRequestClose={closeModal}
            presentationStyle="formSheet"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Create Set</Text>
                    <Button title="Close" onPress={closeModal} />
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView
                        style={styles.content}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <View>
                            <Text style={styles.label}>Your score</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setScore}
                                value={score}
                                keyboardType="number-pad"
                                placeholder={lastScoreAsString}
                                // Is a valid prop as of
                                // https://reactnative.dev/docs/textinput.html#textalign
                                // @ts-ignore
                                textAlign="center"
                            />
                            <Button title="Create" onPress={() => alert('Hi')} />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: '500',
        fontSize: 28,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
    },
    input: {
        fontSize: 38,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 50,
        marginVertical: 10,
        minWidth: 200,
    }
});

export default CreateSetModal;
