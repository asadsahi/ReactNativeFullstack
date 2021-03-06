import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Ratings from '../views/ratings';

const RatingStackItem = createStackNavigator({
  Ratings: {
    screen: Ratings,
  },
});

RatingStackItem.navigationOptions = {
  tabBarLabel: 'Ratings',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name="star"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default RatingStackItem;
