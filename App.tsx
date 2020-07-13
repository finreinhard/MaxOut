import React from 'react';
import {GlobalStoreProvider} from "./src/store";
import * as Localization from "expo-localization";
import moment from "moment";
import 'moment/locale/de';
import {StatusBar} from "react-native";
import TabNavigation from "./src/components/TabNavigation";
import i18next from "./src/translation/i18n";
import {I18nextProvider} from "react-i18next";

moment.locale(Localization.locale);

export default function App() {
    return (
        <GlobalStoreProvider>
            <I18nextProvider i18n={i18next}>
                <StatusBar barStyle="light-content" />
                <TabNavigation />
            </I18nextProvider>
        </GlobalStoreProvider>
    );
}
