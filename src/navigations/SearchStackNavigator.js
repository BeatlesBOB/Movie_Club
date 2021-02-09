import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import {DetailsScreen} from "../screens/DetailsScreen";

const Stack = createStackNavigator();

export const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerTransparent:true, headerTintColor: '#B00020',headerTitle:false}}/>
        </Stack.Navigator>
    )
}
