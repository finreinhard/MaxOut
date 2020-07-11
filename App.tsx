import React from 'react';
import {GlobalStoreProvider} from "./src/store";
import * as Localization from "expo-localization";
import moment from "moment";
import 'moment/locale/de';
import {StatusBar} from "react-native";
import TabNavigation from "./src/components/TabNavigation";

moment.locale(Localization.locale);

export default function App() {
    return (
        <GlobalStoreProvider>
            <StatusBar barStyle="light-content" />
            <TabNavigation />
        </GlobalStoreProvider>
    );
}
