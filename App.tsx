import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./src/pages/HomePage";
import SkillDetailPage from "./src/pages/SkillDetailPage";
import {GlobalStoreProvider} from "./src/store";
import * as Localization from "expo-localization";
import moment from "moment";
import 'moment/locale/de';

const NavigationStack = createStackNavigator();

export default function App() {
    useEffect(() => {
        moment.locale(Localization.locale);
    }, []);

    return (
        <GlobalStoreProvider>
            <NavigationContainer>
                <NavigationStack.Navigator>
                    <NavigationStack.Screen
                        name="Home"
                        component={HomePage}
                        options={{
                            headerShown: false,
                            title: ''
                        }}
                    />
                    <NavigationStack.Screen
                        name="SkillDetail"
                        component={SkillDetailPage}
                    />
                </NavigationStack.Navigator>
            </NavigationContainer>
        </GlobalStoreProvider>
    );
}
