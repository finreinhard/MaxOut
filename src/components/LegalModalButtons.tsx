import React, {useState} from 'react';
import useModalState from "../hooks/useModalState";
import Button from "./Button";
import PrivacyIcon from "./icons/PrivacyIcon";
import TextIcon from "./icons/TextIcon";
import LegalModal from "./legal/LegalModal";
import {t} from "../translation/i18n";

const LegalModalButtons = () => {
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

    return (
        <>
            <Button
                onPress={showPrivacyPolicy}
                text={t('legal:privacyPolicy')}
                icon={PrivacyIcon}
            />
            <Button
                onPress={showTermsOfService}
                text={t('legal:termsOfService')}
                icon={TextIcon}
            />
            <LegalModal
                visible={privacyPolicyVisible}
                setVisible={setPrivacyPolicyVisible}
                contentType="PRIVACY_POLICY"
            />
            <LegalModal
                visible={termsOfServiceVisible}
                setVisible={setTermsOfServiceVisible}
                contentType="TERMS_OF_SERVICE"
            />
        </>
    );
};

export default LegalModalButtons;
