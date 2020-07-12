import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import classes to save weather
import Weather from '../classes/weather'

// import openweathermaps API URL and key
import config from '../config'

export default class WeatherCallout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            isLoading: true
        }
    }

    // fetch weather data for each marker to display in callout
    componentDidMount() {
        apiUrl = config.OWM_API_URL + "lat=" + this.props.lat + "&lon=" + this.props.long + "&appid=" + config.OWM_API_KEY;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    weatherData: new Weather(responseJson)
                });
            })
            .catch(error => {
                console.log("openWeatherMaps made an insane error");
                console.log(error)
            })
    }

    title = () => {
        return (
            <Text style={styles.title}>{this.props.title}</Text>
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    {this.title()}
                    <Text>Weather data loading...</Text>
                </View>
            )
        } else {
            return (
                <View>
                    {this.title()}
                    <Text style={styles.txt}>{"Description: " + this.state.weatherData.weatherDescription}</Text>
                    <Text style={styles.txt}>{"Temperature: " + this.state.weatherData.temp + "F"}</Text>
                    <Text style={styles.txt}>{"Min: " + this.state.weatherData.minTemp + "F"}</Text>
                    <Text style={styles.txt}>{"Max: " + this.state.weatherData.maxTemp + "F"}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold"
    },
    txt: {
        paddingTop: 2
    }
})