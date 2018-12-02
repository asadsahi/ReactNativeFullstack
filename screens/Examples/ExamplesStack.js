import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import DefaultNavigationOptions from '../../navigation/DefaultNavigationOptions';
import ExamplesScreen from './ExamplesScreen';
import TodoScreen from './Todo/TodoScreen';
import FlatlistScreen from './Flatlist/FlatlistScreen';
import CameraScreen from './Camera/CameraScreen';
import BarcodeScannerScreen from './BarcodeScanner/BarcodeScannerScreen';
import AudioVideoScreen from './AudioVideo/AudioVideoScreen';
import BrightnessScreen from './Brightness/BrightnessScreen';
import ExpoTabNavigator from '../expo/ExpoTabNavigator';
import NavigationStackNavigator from '../navigation/NavigationStackNavigator';
import NativeElementsNavigator from '../react-native-elements/NativeElementsNavigator';
import AnimationsNavigator from './Animations/AnimationsNavigator';

const ExamplesStack = createStackNavigator({
    NativeElements: NativeElementsNavigator,
    Animations: AnimationsNavigator,
    Expo: ExpoTabNavigator,
    Navigation: NavigationStackNavigator,
    Examples: ExamplesScreen,
    Todo: TodoScreen,
    Flatlist: FlatlistScreen,
    Camera: CameraScreen,
    BarcodeScanner: BarcodeScannerScreen,
    AudioVideo: AudioVideoScreen,
    Brightness: BrightnessScreen,
}, {
        initialRouteName: "Examples",
        defaultNavigationOptions: DefaultNavigationOptions,
    });

export default ExamplesStack;