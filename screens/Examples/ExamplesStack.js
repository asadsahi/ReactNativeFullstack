import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DefaultNavigationOptions from '../../navigation/DefaultNavigationOptions';
import ExamplesScreen from './ExamplesScreen';
import TodoScreen from './Todo/TodoScreen';
import FlatlistScreen from './Flatlist/FlatlistScreen';
import CameraScreen from './Camera/CameraScreen';
import BarcodeScannerScreen from './BarcodeScanner/BarcodeScannerScreen';
import AccelerometerScreen from './Accelerometer/AccelerometerScreen';
import AudioVideoScreen from './AudioVideo/AudioVideoScreen';
import BrightnessScreen from './Brightness/BrightnessScreen';

const ExamplesStack = createStackNavigator({
    Examples: ExamplesScreen,
    Todo: TodoScreen,
    Flatlist: FlatlistScreen,
    Camera: CameraScreen,
    BarcodeScanner: BarcodeScannerScreen,
    AccelerometerScanner: AccelerometerScreen,
    AudioVideo: AudioVideoScreen,
    Brightness: BrightnessScreen
}, {
        initialRouteName: "Examples",
        defaultNavigationOptions: DefaultNavigationOptions,
    });

export default ExamplesStack;