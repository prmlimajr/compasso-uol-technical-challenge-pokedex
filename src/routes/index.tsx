import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const HomeScreen = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeScreen.Navigator>
      <HomeScreen.Screen
        name="Início"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeScreen.Screen
        name="Detalhe"
        component={Detail}
        options={{headerShown: false}}
      />
    </HomeScreen.Navigator>
  );
};

export default HomeRoutes;
