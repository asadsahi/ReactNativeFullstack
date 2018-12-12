import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';


const AuthStack = createStackNavigator({ AppLogin: LoginScreen });

export default AuthStack;