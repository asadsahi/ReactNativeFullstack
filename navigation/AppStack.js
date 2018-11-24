import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import DefaultNavigationOptions from './DefaultNavigationOptions';
import TabBarIcon from '../components/TabBarIcon';
import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ExamplesStack from '../screens/Examples/ExamplesStack';

const HomeStack = createStackNavigator({
  Home: createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
          />
        ),
      }
    },
    Links: {
      screen: LinksScreen, navigationOptions: {
        tabBarLabel: 'Links',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
          />
        ),
      }
    },
    Settings: {
      screen: SettingsScreen, navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
          />
        ),
      }
    },
  })
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: DefaultNavigationOptions,
  });


export default createDrawerNavigator({
  HomeStack,
  ExamplesStack
}, {
    initialRouteName: 'HomeStack',
    contentComponent: CustomDrawerContentComponent,
  });
