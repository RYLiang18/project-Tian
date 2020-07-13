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
import IntroPage from './components/IntroPage'

// import API URL and key
import config from './config'

// import classes to store NPS data
import npsPark from './classes/npsPark'
import npsParkList from './classes/npsParkList'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      npsParks: null,
      stateCode: "",
      stateName: "",
      state: state.waitingForStateCode
    }
  }

  // fetch national park json from nps API
  componentDidMount() {
    if (this.state.state == state.loadingData) {
      console.log("reached")
      fetch(config.API_URL + this.state.stateCode, {
        headers: {
          'X-Api-Key': config.API_KEY
          // to remove once I figure out how to use react-native-dotenv
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            state: state.finishedLoadingData,
            npsParks: responseJson.data
          });
        })
        .catch((error) => {
          console.log("nps made an insane error");
          console.log(error)
        })
    }
  }

  // filter out raw park data w/o latlong and store parks
  // as npsParkList
  getFilteredParkData(npsParks) {
    let filteredParkData = new npsParkList();
    npsParks.forEach(park => {
      if (park.latLong) {
        filteredParkData.push(
          new npsPark(
            park.fullName,
            park.latitude,
            park.longitude
          )
        );
      }
    })
    return filteredParkData;
  }

  // callback
  // really, really sketch
  chooseState = (stateCodeIn, stateNameIn) => {
    this.setState({
      stateCode: stateCodeIn,
      stateName: stateNameIn,
      state: state.loadingData
    }, () => {
      this.componentDidMount()
    })
  }

  render() {
    if (this.state.state == state.waitingForStateCode) {
      return (
        <IntroPage chooseState={this.chooseState} />
      )
    } else if (this.state.state == state.loadingData) {
      return (
        <View style={loadingStyles.flexContainer}>
          <Text style={loadingStyles.txt}>
            I swear it's loading...
          </Text>
        </View>
      );
    } else if (this.state.state == state.finishedLoadingData) {
      console.log("finished loading")

      let filteredParkData = this.getFilteredParkData(this.state.npsParks)
      console.log(filteredParkData.parkList)
      console.log(filteredParkData.getNames());
      console.log(filteredParkData.getCoords())

      return (
        <View style={styles.flexContainer}>
          <View style={[styles.header, styles.component]} >
            <Header />
          </View>
          <View style={[styles.map, styles.component]}>
            <Map
              filteredParkData={filteredParkData.parkList}
            />
          </View>
          <View style={[styles.parks, styles.component]}>
            <Parks npsParkNames={filteredParkData.getNames()} />
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

const state = Object.freeze({
  waitingForStateCode: 1,
  loadingData: 2,
  finishedLoadingData: 3
})