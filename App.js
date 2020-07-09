/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


const App = () => {
  return (
    <View>
      <Text style="styles.text">Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkslateblue'
  }
});

export default App;
