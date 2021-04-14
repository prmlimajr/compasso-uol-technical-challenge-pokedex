import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

export function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </NavigationContainer>
  );
}
