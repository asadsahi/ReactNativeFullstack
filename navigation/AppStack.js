import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent';
import HomeStack from '../screens/HomeStack';
import ExamplesStack from '../screens/Examples/ExamplesStack';

export default createDrawerNavigator({
  HomeStack,
  ExamplesStack,
}, {
    initialRouteName: 'ExamplesStack',
    contentComponent: CustomDrawerContentComponent,
  });
