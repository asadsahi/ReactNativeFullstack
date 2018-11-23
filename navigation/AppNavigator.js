import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import AppStack from './AppStack';
import SignInScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);