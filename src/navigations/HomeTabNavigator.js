import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchStackNavigator} from "../navigations/SearchStackNavigator";
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const TabNavigator = createBottomTabNavigator();


function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        let iconName;
        let iconColor;
        let iconSize;

        if (route.name === 'Home') {
          iconName = "home"
          iconColor= isFocused? '#B5A90F': 'black';
          iconSize = 25
        } else if (route.name === 'Search') {
          iconName = "search";
          iconColor= isFocused ? '#B5A90F' : 'black';
          iconSize = 20
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,justifyContent:"center",alignItems:"center",height:50,borderTopColor: isFocused ? '#B5A90F' : '#B00020',borderTopWidth
          :5,backgroundColor:"#B00020" }}
          >
            <FontAwesome name={iconName} size={iconSize} color={iconColor} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export const HomeTabNavigator = () => {
    return (
        <TabNavigator.Navigator tabBar={props => <CustomTabBar {...props} />}>
            <TabNavigator.Screen name="Home" component={HomeScreen} key={0}/>
            <TabNavigator.Screen name="Search" component={SearchStackNavigator} key={1}/>
        </TabNavigator.Navigator>
    )
}
