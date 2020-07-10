import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

// components
import Header from './components/Header'
import Map from './components/Map'
import Parks from './components/Parks'

const App = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.header, styles.component]} >
        <Header />
      </View>
      <View style={[styles.map, styles.component]}>
        <Map />
      </View>
      <View style={[styles.parks, styles.component]}>
        <Parks />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1
  },
  component: {
    marginTop: 2.5,
    marginBottom: 2.5,
    marginLeft: 5,
    marginRight: 5
  },
  header: {
    flex: 2
  },
  map: {
    flex: 10
  },
  parks: {
    flex: 10
  }
});

export default App;
