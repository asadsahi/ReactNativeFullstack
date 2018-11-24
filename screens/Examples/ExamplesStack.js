import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DefaultNavigationOptions from '../../navigation/DefaultNavigationOptions';
import ExamplesScreen from './ExamplesScreen';
import TodoScreen from './Todo/TodoScreen';

export const Routes = [
    { route: 'Todo', description: 'Todo list example', icon: 'login' },
];

const ExamplesStack = createStackNavigator({
    Examples: ExamplesScreen,
    Todo: TodoScreen,
}, {
        initialRouteName: "Examples",
        defaultNavigationOptions: DefaultNavigationOptions,
    });

export default ExamplesStack;