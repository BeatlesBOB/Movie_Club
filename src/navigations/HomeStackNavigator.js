import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {DetailsScreen} from "../screens/DetailsScreen";
import {HomeTabNavigator} from "./HomeTabNavigator";
import GenreScreen from '../screens/GenreScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="GenreScreen" component={GenreScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerTransparent:true, headerTintColor: '#B00020',headerTitle:false}} />
        </Stack.Navigator>
    )
}
