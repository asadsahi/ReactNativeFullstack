import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Components from './drawer/components';
import Login from './drawer/login';
import Profile from './drawer/profile';
import Lists from './drawer/lists';
import Ratings from './drawer/ratings';
import Pricing from './drawer/pricing';
import Settings from './drawer/settings';


const NativeElementsNavigator = createBottomTabNavigator({
  Login,
  Profile,
  Lists,
  Ratings,
  Pricing,
  Settings,
  Components,
});

export default NativeElementsNavigator;
