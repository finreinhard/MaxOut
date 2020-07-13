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
import {t} from "../translation/i18n";

const SettingsPage = () => {
    const {resetData} = useCommon();

    const handleDeleteAllData = () => Alert.alert(
        t('settings:deleteData'),
        t('settings:deleteDataDescription'),
            [
                {
                    text: t('cancel'),
                    style: 'cancel',
                },
                {
                    text: t('delete'),
                    onPress: resetData,
                    style: 'destructive',
                },
            ],
        );

    return (
        <Container>
            <Title text={t('settings:title')} />
            <Text withMargin>{t('settings:deleteDataWarning')}</Text>
            <Button
                icon={DeleteIcon}
                text={t('settings:deleteData')}
                onPress={handleDeleteAllData}
                color={dangerColor}
            />
            <Text withMargin>{t('settings:readLegal')}</Text>
            <LegalModalButtons />
            <Text withMargin>{t('settings:versionText', {version: packageJson.version})}</Text>
            <Text withMargin>{t('settings:developedBy')}</Text>
        </Container>
    );
};

export default SettingsPage;
