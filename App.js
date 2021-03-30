/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResults />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
