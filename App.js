import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './src/store';

export const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
