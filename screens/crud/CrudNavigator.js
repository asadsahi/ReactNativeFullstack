/*Example of SQLite Database in React Native*/
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const CrudNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  View: ViewUser,
  ViewAll: ViewAllUser,
  Update: UpdateUser,
  Register: RegisterUser,
  Delete: DeleteUser,
});

export default CrudNavigator;
