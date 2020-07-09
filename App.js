import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

// components
import Header from './components/Header'
import Map from './components/Map'

const App = () => {
  return (
    <View style={styles.container}>
      <Header style={styles.component} />
      <Map style={styles.component} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  component: {
  }
});

export default App;
