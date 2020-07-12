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

import config from './config'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      npsParks: null,
      isLoading: true
    }
  }

  // fetch national park json from nps API
  componentDidMount() {
    // for testing
    console.log(config.API_URL)
    console.log(config.API_KEY)
    
    return fetch(config.API_URL, {
      headers: {
        'X-Api-Key': config.API_KEY
        // to remove once I figure out how to use react-native-dotenv
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          npsParks: responseJson.data
        });
      })
      .catch((error) => {
        console.log("nps made an insane error");
        console.log(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      console.log("loading")
      return (
        <View style={loadingStyles.flexContainer}>
          <Text style={loadingStyles.txt}>Loading...</Text>
        </View>
      );
    } else {
      console.log("finished loading")
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
      )
    }
  };
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

const loadingStyles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  txt: {
    textAlign: "center"
  }
})

