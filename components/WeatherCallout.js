import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
                    weatherData: responseJson
                });
            })
            .catch(error => {
                console.log("openWeatherMaps made an insane error");
                console.log(error)
            })
    }

    title = () => {
        return (
            <Text>{this.props.title}</Text>
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
                    <Text>You utter fooool</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({

})