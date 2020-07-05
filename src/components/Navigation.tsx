import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../pages/HomePage";
import SkillDetailPage from "../pages/SkillDetailPage";
import React from "react";
import useSetup from "../store/setup/hook";
import LegalSetup from "../pages/LegalSetup";
import {Text} from "react-native";

const NavigationStack = createStackNavigator();

const Navigation = () => {
    const {accepted, completed} = useSetup();

    if (!accepted) {
        return <LegalSetup />;
    }

    if (!completed) {
        return <Text>TEst</Text>;
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
