import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BottomTabBarProps, BottomTabBarOptions} from '@react-navigation/bottom-tabs';
import {SafeAreaContext} from 'react-native-safe-area-context';
import {useTheme} from "@react-navigation/native";

const NavigationTabBarWrapper = (props: BottomTabBarProps<BottomTabBarOptions>) => (
    <NavigationTabBar {...props} />
)

const NavigationTabBar = (props: BottomTabBarProps<BottomTabBarOptions>) => {
    const {state, descriptors, navigation} = props;

    const {colors} = useTheme();

    return (
        <SafeAreaContext.Consumer>
            {(insets) => (
                <View style={[
                    styles.container,
                    {bottom: (insets && insets.bottom) ? insets.bottom : 16},
                    {backgroundColor: colors.card},
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
                                <Text style={[
                                    styles.text,
                                    {color: colors.text},
                                    isActive && {color: colors.primary},
                                ]}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )}
        </SafeAreaContext.Consumer>
    );
};

const styles = StyleSheet.create({
    positioning: {},
    container: {
        position: 'absolute',
        left: 16,
        right: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 12,
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
