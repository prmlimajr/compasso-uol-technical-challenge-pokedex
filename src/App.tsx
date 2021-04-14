import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

export function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
