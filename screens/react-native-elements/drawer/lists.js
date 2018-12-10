import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Lists from '../views/lists';

const ListStackItem = createStackNavigator({
  Playground: { screen: Lists }
},
  {
    headerMode: 'none'
  }
);

ListStackItem.navigationOptions = {
  tabBarLabel: 'Lists',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name="list"
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

export default ListStackItem;
