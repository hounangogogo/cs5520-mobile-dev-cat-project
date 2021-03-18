import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen, { headerOptions } from '../screens/HomeScreen';
import CatSearchScreen from '../screens/CatSearchScreen';
import CatDetailScreen from '../screens/CatDetailScreen';
import DogSearchScreen from '../screens/DogSearchScreen';
import DogDetailScreen from '../screens/DogDetailScreen';
import AdoptScreen from '../screens/AdoptScreen'
import LostPetScreen from '../screens/LostPetScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();





const HomeNav = () => (
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
)




const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={HomeNav}
                />
                <Drawer.Screen name="Cat 🐱" component={CatSearchScreen} />
                <Drawer.Screen name="Dog 🐶" component={DogSearchScreen} />
                <Drawer.Screen name="Adopt 🦮" component={AdoptScreen} />
                <Drawer.Screen name="LostPet 🙀" component={LostPetScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;