import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../views/login';

const LoginScreen = createStackNavigator({
  Playground: { screen: Login }
},
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="email"
          size={30}
          iconStyle={{
            width: 30,
            height: 30
          }}
          type="material"
          color={tintColor}
        />
      ),
    }
  }
);

export default LoginScreen;
