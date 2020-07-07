import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../pages/HomePage";
import SkillDetailPage from "../pages/SkillDetailPage";
import React from "react";
import useSetup from "../store/setup/hook";
import LegalSetupPage from "../pages/LegalSetupPage";
import WelcomePage from "../pages/WelcomePage";

const NavigationStack = createStackNavigator();

const Navigation = () => {
    const {accepted, completed} = useSetup();

    if (!accepted) {
        return <LegalSetupPage />;
    }

    if (!completed) {
        return <WelcomePage />;
    }

    return (
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
    )
};

export default Navigation;
