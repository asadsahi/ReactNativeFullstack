import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/LoginScreen';


const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default AuthStack;