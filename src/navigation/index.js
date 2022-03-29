import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Characters from '../screens/characters/';
import Favorites from '../screens/favorites';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Characters"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
