import {createStackNavigator} from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import SkillDetailPage from "../pages/SkillDetailPage";
import React from "react";

const NavigationStack = createStackNavigator();

const SkillsNavigation = () => {
    return (
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
    )
};

export default SkillsNavigation;
