import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DefaultNavigationOptions from '../../navigation/DefaultNavigationOptions';
import ExamplesScreen from './ExamplesScreen';
import TodoScreen from './Todo/TodoScreen';

// Supported font types
// export type IconType =
//   | 'material'
//   | 'material-community'
//   | 'simple-line-icon'
//   | 'zocial'
//   | 'font-awesome'
//   | 'octicon'
//   | 'ionicon'
//   | 'foundation'
//   | 'evilicon'
//   | 'entypo'
//   | string;

const ExamplesStack = createStackNavigator({
    Examples: ExamplesScreen,
    Todo: TodoScreen,
}, {
        initialRouteName: "Examples",
        defaultNavigationOptions: DefaultNavigationOptions,
    });

export default ExamplesStack;