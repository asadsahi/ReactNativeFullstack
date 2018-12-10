import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const MainNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AppAuth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;