import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screen/HomeScreen';
import CategoryInfoScreen from '../../Screen/CategoryInfoScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CategoryInfo" component={CategoryInfoScreen} />
     
    </Stack.Navigator>
  );
};

export default AppStack;
