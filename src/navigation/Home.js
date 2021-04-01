import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createStackNavigator();

const RootNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'DetinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'SearchResult'} component={SearchResults} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
