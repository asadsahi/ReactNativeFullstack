import React, { Component } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import DefaultNavigationOptions from '../navigation/DefaultNavigationOptions';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from './HomeScreen';
import LinksScreen from './LinksScreen';
import SettingsScreen from './SettingsScreen';

const HomeStack = createStackNavigator({
    Home: createBottomTabNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
                ),
            }
        },
        Links: {
            screen: LinksScreen, navigationOptions: {
                tabBarLabel: 'Links',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
                ),
            }
        },
        Settings: {
            screen: SettingsScreen, navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
                ),
            }
        },
    })
}, {
        initialRouteName: "Home",
        defaultNavigationOptions: DefaultNavigationOptions,
    });
export default HomeStack;