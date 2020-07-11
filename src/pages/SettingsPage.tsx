import React from 'react';
import Title from "../components/Title";
import Container from "../components/Container";
import Button from "../components/Button";
import {dangerColor} from "../utils/color";
import DeleteIcon from "../components/icons/DeleteIcon";
import Text from "../components/Text";
import LegalModalButtons from "../components/LegalModalButtons";
import packageJson from '../../package.json';
import useCommon from "../store/common/hook";
import {Alert} from "react-native";

const SettingsPage = () => {
    const {resetData} = useCommon();

    const handleDeleteAllData = () => Alert.alert(
        'Delete all data',
        'Are you sure that you want to erase all data? This step cannot be undone!',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: resetData,
                    style: 'destructive',
                },
            ],
        );

    return (
        <Container>
            <Title text="Settings" />
            <Text withMargin>Be careful! This step cannot be reverted.</Text>
            <Button
                icon={DeleteIcon}
                text="Delete all data"
                onPress={handleDeleteAllData}
                color={dangerColor}
            />
            <Text withMargin>
                You want to read our Privacy Policy and the Terms of Service again? No Problem! Just click on the
                sheet you want to read.
            </Text>
            <LegalModalButtons />
            <Text withMargin>{`MaxOut v${packageJson.version}`}</Text>
            <Text withMargin>Developed in Kassel by NorthSportDE and Anguli Networks.</Text>
        </Container>
    );
};

export default SettingsPage;
