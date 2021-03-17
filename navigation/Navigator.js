import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CatDetailScreen from '../screens/CatDetailScreen';

const Stack = createStackNavigator();


const MoiveNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="CatDetail"
                    component={CatDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MoiveNavigator;