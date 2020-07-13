import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import SettingsPage from "../pages/SettingsPage";
import SkillsNavigation from "./SkillsNavigation";
import useSetup from "../store/setup/hook";
import LegalSetupPage from "../pages/LegalSetupPage";
import WelcomePage from "../pages/WelcomePage";
import NavigationTabBar from "./NavigationTabBar";
import {defaultTheme} from "../utils/color";
import {t} from "../translation/i18n";

const Tab = createBottomTabNavigator();
const Theme = {
    ...DefaultTheme,
    ...defaultTheme,
};

const TabNavigation = () => {
    const {accepted, completed} = useSetup();

    let content;

    if (!accepted) {
        content = <LegalSetupPage />;
    } else if (!completed) {
        content = <WelcomePage />;
    } else {
        content = (
            <Tab.Navigator
                tabBar={NavigationTabBar}
            >
                <Tab.Screen
                    name="Skills"
                    options={{title: t('skills')}}
                    component={SkillsNavigation}
                />
                <Tab.Screen
                    name="Settings"
                    options={{title: t('settings:title')}}
                    component={SettingsPage}
                />
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer theme={Theme}>
            {content}
        </NavigationContainer>
    )
};

export default TabNavigation;
