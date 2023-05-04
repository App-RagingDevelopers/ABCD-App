import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './App/Screen/HomeScreen';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
import AppNav from './App/Components/Navigation/AppNav';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#000000'}/>
      <AppNav />
    </Provider>
  );
};

export default App;
