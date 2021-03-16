import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';
import CatDetailScreen from '../screens/CatDetailScreen';

const MoiveNavigator = createStackNavigator({
    Home: HomeScreen,
    CatDetail: {
        screen: CatDetailScreen
    }
})


export default createAppContainer(MoiveNavigator);