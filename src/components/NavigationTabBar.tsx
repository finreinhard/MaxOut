import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {BottomTabBarProps, BottomTabBarOptions} from '@react-navigation/bottom-tabs';
import {useSafeArea} from 'react-native-safe-area-context';
import {useTheme} from "@react-navigation/native";
import Text from "./Text";

const NavigationTabBarWrapper = (props: BottomTabBarProps<BottomTabBarOptions>) => (
    <NavigationTabBar {...props} />
)

const NavigationTabBar = (props: BottomTabBarProps<BottomTabBarOptions>) => {
    const {state, descriptors, navigation} = props;
    const {colors} = useTheme();
    const {bottom} = useSafeArea();

    return (
        <View style={[
            styles.container,
            {
                bottom: bottom || 16,
                backgroundColor: colors.card,
                borderColor: colors.border,
            },
        ]}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;
                const isActive = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isActive && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                }

                const onLongPress = () => navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityStates={isActive ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.entry}
                    >
                        <Text style={isActive && {color: colors.primary}}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    positioning: {},
    container: {
        position: 'absolute',
        left: 64,
        right: 64,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    entry: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 18,
    },
});

export default NavigationTabBarWrapper;
