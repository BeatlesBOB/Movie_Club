import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {DetailsScreen} from "../screens/DetailsScreen";
import {HomeTabNavigator} from "./HomeTabNavigator";
import GenreScreen from '../screens/GenreScreen';
import {colors} from '../constants/variables'

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="GenreScreen" component={GenreScreen} options={{headerStyle: {backgroundColor: colors.primary, textAlign: 'center'}, headerTintColor: colors.text, headerTitleStyle: {fontWeight: 'bold'}}}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerTransparent:true, headerTintColor: '#B00020',headerTitle:false}} />
        </Stack.Navigator>
    )
}
