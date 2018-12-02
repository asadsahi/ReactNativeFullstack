import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import AnimatableExplorerScreen from './AnimatableExplorer/AnimatableExplorerScreen';
import MakeItRainScreen from './MakeItRain/MakeItRainScreen';

const AnimationsNavigator = createBottomTabNavigator({
    RainScreen: MakeItRainScreen,
    Explorer: AnimatableExplorerScreen,
});

export default AnimationsNavigator;
