import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ExamplesScreen from '../screens/Examples/ExamplesScreen';

const HomeStack = createBottomTabNavigator({
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
}, {
    initialRouteName: "Home",
  });

const ExamplesStack = createStackNavigator({
  Examples: ExamplesScreen,
}, {
    navigationOptions: {
      tabBarLabel: 'Examples',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
      ),
    }
  });


export default createDrawerNavigator({
  HomeStack,
  ExamplesStack
}, {
    initialRouteName: 'HomeStack',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'green' },
      title: 'Logged In to your app!',
      headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>,
    }),
    contentComponent: CustomDrawerContentComponent,
  });
