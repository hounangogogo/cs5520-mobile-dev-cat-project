import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CatSearchScreen from '../screens/CatSearchScreen';
import CatDetailScreen from '../screens/CatDetailScreen';
import DogSearchScreen from '../screens/DogSearchScreen';
import DogDetailScreen from '../screens/DogDetailScreen';


const Stack = createStackNavigator();


const Navigator = () => {
    return (
        <NavigationContainer>


            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="DogSearch"
                    component={DogSearchScreen}
                />
                <Stack.Screen
                    name="DogDetail"
                    component={DogDetailScreen}
                />
                
                <Stack.Screen
                    name="CatSearch"
                    component={CatSearchScreen}
                />
                <Stack.Screen
                    name="CatDetail"
                    component={CatDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;