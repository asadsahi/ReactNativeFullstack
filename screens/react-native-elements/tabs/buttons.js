import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsHome from '../views/buttons_home';
import ButtonsDetails from '../views/buttons_detail';

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);

const ButtonsDetailTabView = ({ navigation }) => (
  <ButtonsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const ButtonsTab = createStackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Buttons',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  Button_Detail: {
    screen: ButtonsDetailTabView,
    path: '/buttons_detail',
    navigationOptions: {
      title: 'Buttons Detail',
    },
  },
});

export default ButtonsTab;
