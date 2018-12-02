import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Lists from '../views/lists';

const ListsDrawerItem = createStackNavigator({
  Playground: { screen: Lists }
},
  {
    headerMode: 'none'
  }
);

ListsDrawerItem.navigationOptions = {
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

export default ListsDrawerItem;
