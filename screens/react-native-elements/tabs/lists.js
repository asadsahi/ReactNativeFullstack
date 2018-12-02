
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListsHome from '../views/lists_home';
import ListsDetails from '../views/lists_detail';

const ListsTabView = ({ navigation }) => (
  <ListsHome banner="Lists" navigation={navigation} />
);

const ListsDetailTabView = ({ navigation }) => (
  <ListsDetails banner="Lists Detail" navigation={navigation} />
);

const ListsTab = createStackNavigator({
  Home: {
    screen: ListsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Lists',
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
  Lists_Detail: {
    screen: ListsDetailTabView,
    path: 'lists_detail',
    navigationOptions: {
      title: 'Lists Detail',
    },
  },
});

export default ListsTab;
