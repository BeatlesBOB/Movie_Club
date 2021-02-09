// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {HomeStackNavigator} from './src/navigations/HomeStackNavigator';
import { Provider } from 'react-redux'
import stores from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
const {store,persistor} = stores();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
